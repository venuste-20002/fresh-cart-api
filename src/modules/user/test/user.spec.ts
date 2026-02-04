import chai from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import userControllers from '../controller/userControllers';
import userRepositories from '../repository/userRepositories';
import authRepositories from '../../auth/repository/authRepositories';
import { uploadImages } from '../../../helpers/uploadImage';
import { sendEmail } from '../../../services/sendEmail';
import { eventEmitter } from '../../../helpers/notifications';
import { sellerProfileStatusEmail } from '../../../services/emailTemplate';
import Users from '../../../databases/models/users';
import Notifications from '../../../databases/models/notifications';
import Addresses from '../../../databases/models/addresses';
import SellerProfile from '../../../databases/models/sellerProfile';

const { expect } = chai;

describe('User Controllers', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: sinon.SinonStub;

  beforeEach(() => {
    req = {};
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('adminGetUsers', () => {
    it('should return all users successfully', async () => {
      const mockUsers = [{
        id: '1',
        email: 'user1@example.com',
        password: 'hashedpass',
        firstName: 'User',
        lastName: 'One'
      } as Users];
      sinon.stub(userRepositories, 'getAllUsers').resolves(mockUsers);

      await userControllers.adminGetUsers(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'Successfully',
        data: { user: mockUsers },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      sinon.stub(userRepositories, 'getAllUsers').rejects(error);

      await userControllers.adminGetUsers(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('adminGetUser', () => {
    it('should return a user by id', async () => {
      const mockUser = {
        id: '1',
        email: 'user1@example.com',
        password: 'hashedpass',
        firstName: 'User',
        lastName: 'One'
      } as Users;
      req.params = { id: '1' };
      sinon.stub(authRepositories, 'findUserByAttributes').resolves(mockUser);

      await userControllers.adminGetUser(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'Successfully',
        data: { user: mockUser },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('User not found');
      req.params = { id: '1' };
      sinon.stub(authRepositories, 'findUserByAttributes').rejects(error);

      await userControllers.adminGetUser(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('getUserDetails', () => {
    it('should return user details', async () => {
      const mockUser = {
        id: '1',
        email: 'user1@example.com',
        password: 'hashedpass',
        firstName: 'User',
        lastName: 'One'
      } as Users;
      req.user = { id: '1' };
      sinon.stub(authRepositories, 'findUserByAttributes').resolves(mockUser);

      await userControllers.getUserDetails(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        data: { user: mockUser },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('User not found');
      req.user = { id: '1' };
      sinon.stub(authRepositories, 'findUserByAttributes').rejects(error);

      await userControllers.getUserDetails(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('updateUserProfile', () => {
    it('should update user profile without file', async () => {
      const mockUser = {
        id: '1',
        email: 'user1@example.com',
        password: 'hashedpass',
        firstName: 'Updated',
        lastName: 'User'
      } as Users;
      req.user = { id: '1' };
      req.body = { firstName: 'Updated', lastName: 'User' };
      req.file = undefined;
      sinon.stub(userRepositories, 'updateUserProfile').resolves(mockUser);

      await userControllers.updateUserProfile(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'User profile updated successfully',
        data: { user: mockUser },
      });
    });

    it('should update user profile with file upload', async () => {
      const mockUser = {
        id: '1',
        email: 'user1@example.com',
        password: 'hashedpass',
        firstName: 'Updated',
        lastName: 'User',
        profilePicture: 'http://example.com/image.jpg'
      } as Users;
      const mockUpload = { secure_url: 'http://example.com/image.jpg' };
      req.user = { id: '1' };
      req.body = { firstName: 'Updated', lastName: 'User' };
      req.file = { filename: 'test.jpg' } as any;
      sinon.stub(uploadImages)
      sinon.stub(userRepositories, 'updateUserProfile').resolves(mockUser);

      await userControllers.updateUserProfile(req as Request, res as Response);

      expect(uploadImages).to.have.been.calledWith(req.file);
      expect(userRepositories.updateUserProfile).to.have.been.calledWith(
        { firstName: 'Updated', lastName: 'User', profilePicture: 'http://example.com/image.jpg' },
        '1'
      );
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
    });

    it('should handle errors', async () => {
      const error = new Error('Update failed');
      req.user = { id: '1' };
      req.body = { firstName: 'Updated', lastName: 'User' };
      sinon.stub(userRepositories, 'updateUserProfile').rejects(error);

      await userControllers.updateUserProfile(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('changePassword', () => {
    it('should change user password', async () => {
      const mockUser = {
        id: '1',
        email: 'user1@example.com',
        password: 'hashedPassword'
      } as Users;
      req.user = { id: '1', password: 'hashedPassword' };
      sinon.stub(authRepositories, 'updateUserByAttributes').resolves(mockUser);
      sinon.stub(eventEmitter, 'emit');

      await userControllers.changePassword(req as any, res as Response);

      expect(authRepositories.updateUserByAttributes).to.have.been.calledWith(
        'password',
        'hashedPassword',
        'id',
        '1'
      );
      expect(eventEmitter.emit).to.have.been.calledWith('passwordChanged', {
        userId: '1',
        message: 'Password changed successfully',
      });
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'Password updated successfully',
        data: { user: mockUser },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Password change failed');
      req.user = { id: '1', password: 'hashedPassword' };
      sinon.stub(authRepositories, 'updateUserByAttributes').rejects(error);

      await userControllers.changePassword(req as any, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('getAllNotifications', () => {
    it('should return all notifications for user', async () => {
      const mockNotifications = [{
        id: '1',
        userId: '1',
        message: 'Test notification',
        isRead: false
      } as Notifications];
      req.user = { id: '1' };
      sinon.stub(userRepositories, 'findNotificationsByuserId').resolves(mockNotifications);

      await userControllers.getAllNotifications(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        data: { notifications: mockNotifications },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Failed to fetch notifications');
      req.user = { id: '1' };
      sinon.stub(userRepositories, 'findNotificationsByuserId').rejects(error);

      await userControllers.getAllNotifications(req as Request, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });

  describe('submitSellerRequest', () => {
    it('should submit seller request without file', async () => {
      const mockSellerRequest = {
        sellerRequest: { id: '1', userId: '1', requestStatus: 'Pending' } as SellerProfile,
        paymentMethods: { id: '1', userId: '1', bankPayment: null, mobilePayment: null } as any
      };
      req.user = { id: '1', email: 'user@example.com' };
      req.body = { businessName: 'Test Business' };
      req.file = undefined;
      sinon.stub(userRepositories, 'createSellerProfile').resolves(mockSellerRequest);
      sinon.stub(sendEmail);

      await userControllers.submitSellerRequest(req as any, res as Response);

      expect(userRepositories.createSellerProfile).to.have.been.calledWith({
        userId: '1',
        requestStatus: 'Pending',
        sellerData: { businessName: 'Test Business', rdbDocument: undefined },
      });
      expect(sendEmail).to.have.been.calledTwice;
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
    });

    it('should submit seller request with file upload', async () => {
      const mockSellerRequest = {
        sellerRequest: { id: '1', userId: '1', requestStatus: 'Pending' } as SellerProfile,
        paymentMethods: { id: '1', userId: '1', bankPayment: null, mobilePayment: null } as any
      };
      const mockUpload = { secure_url: 'http://example.com/document.pdf' };
      req.user = { id: '1', email: 'user@example.com' };
      req.body = { businessName: 'Test Business' };
      req.file = { filename: 'document.pdf' } as any;
      sinon.stub(uploadImages);
      sinon.stub(userRepositories, 'createSellerProfile').resolves(mockSellerRequest);
      sinon.stub(sendEmail);

      await userControllers.submitSellerRequest(req as any, res as Response);

      expect(uploadImages).to.have.been.calledWith(req.file);
      expect(userRepositories.createSellerProfile).to.have.been.calledWith({
        userId: '1',
        requestStatus: 'Pending',
        sellerData: { businessName: 'Test Business', rdbDocument: 'http://example.com/document.pdf' },
      });
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
    });

    it('should handle errors', async () => {
      const error = new Error('Submission failed');
      req.user = { id: '1', email: 'user@example.com' };
      req.body = { businessName: 'Test Business' };
      sinon.stub(userRepositories, 'createSellerProfile').rejects(error);

      await userControllers.submitSellerRequest(req as any, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        error: error.message,
      });
    });
  });

  describe('changeUserAddress', () => {
    it('should add new address if not exists', async () => {
      const mockAddress = {
        id: '1',
        userId: '1',
        street: '123 Main St',
        province: 'Test Province',
        district: 'Test District',
        sector: 'Test Sector'
      } as Addresses;
      req.user = { id: '1' };
      req.body = { street: '123 Main St', city: 'Test City', province: 'Test Province', district: 'Test District', sector: 'Test Sector' };
      sinon.stub(userRepositories, 'findAddressByUserId').resolves(null);
      sinon.stub(userRepositories, 'addUserAddress').resolves(mockAddress);

      await userControllers.changeUserAddress(req as any, res as Response);

      expect(userRepositories.addUserAddress).to.have.been.calledWith({
        street: '123 Main St',
        city: 'Test City',
        province: 'Test Province',
        district: 'Test District',
        sector: 'Test Sector',
        userId: '1',
      });
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'Address added successfully',
        data: { address: mockAddress },
      });
    });

    it('should update existing address', async () => {
      const mockAddress = {
        id: '1',
        userId: '1',
        street: '456 Updated St',
        province: 'Test Province',
        district: 'Test District',
        sector: 'Test Sector'
      } as Addresses;
      req.user = { id: '1' };
      req.body = { street: '456 Updated St', city: 'Updated City', province: 'Test Province', district: 'Test District', sector: 'Test Sector' };
      sinon.stub(userRepositories, 'findAddressByUserId').resolves({ id: '1' } as Addresses);
      sinon.stub(userRepositories, 'updateUserAddress').resolves(mockAddress);

      await userControllers.changeUserAddress(req as any, res as Response);

      expect(userRepositories.updateUserAddress).to.have.been.calledWith(
        { street: '456 Updated St', city: 'Updated City', province: 'Test Province', district: 'Test District', sector: 'Test Sector' },
        '1'
      );
      expect(res.status).to.have.been.calledWith(httpStatus.OK);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.OK,
        message: 'Address updated successfully',
        data: { address: mockAddress },
      });
    });

    it('should handle errors', async () => {
      const error = new Error('Address update failed');
      req.user = { id: '1' };
      req.body = { street: '123 Main St' };
      sinon.stub(userRepositories, 'findAddressByUserId').rejects(error);

      await userControllers.changeUserAddress(req as any, res as Response);

      expect(res.status).to.have.been.calledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).to.have.been.calledWith({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    });
  });
});
