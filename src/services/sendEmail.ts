// @ts-ignore
import { Resend } from 'resend';
import dotenv from "dotenv";
import authRepository from "../modules/auth/repository/authRepositories";

dotenv.config();
const resend = new Resend("re_dWNUozVT_LCwjX8jhtLgE9DHujQtCGxwJ");

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const sendEmailNotification = async (userId: string, message: string) => {
  try {
    const user = await authRepository.findUserByAttributes("id", userId);
    
    if (!user || !user.email) {
      throw new Error("User not found or user does not have a valid email address");
    }

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const result = await resend.emails.send({
          from: 'onboarding@resend.dev', // Hardcoded
          to: user.email,
          subject: "Farm-RAMIP Platform",
          text: message
        });
        console.log("✓ Resend API Response:", JSON.stringify(result, null, 2));
        console.log("Email sent successfully to:", user.email);
        break;
      } catch (error: any) {
        console.error("✗ Resend API Error:", error);
        if (attempt === MAX_RETRIES) {
          console.error("Final attempt failed:", error.message);
          throw new Error(`Failed to send email after ${MAX_RETRIES} attempts: ${error.message}`);
        } else {
          console.warn(`Attempt ${attempt} failed: ${error.message}. Retrying in ${RETRY_DELAY_MS}ms...`);
          await delay(RETRY_DELAY_MS);
        }
      }
    }
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

const sendEmail = async (email: string, subject: string, message: string, retries = 3) => {
  let attempt = 0;
  while (attempt < retries) {
    try {  
      const result = await resend.emails.send({
        from: 'onboarding@resend.dev', // Hardcoded
        to: email,
        subject: subject,
        html: message
      });
      
      console.log("✓ Resend Response:", JSON.stringify(result, null, 2));
      console.log("Email sent successfully");
      break;
    } catch (error: any) {
      attempt++;
      console.error(`✗ Attempt ${attempt} failed:`, error);
      if (attempt >= retries) {
        throw new Error(`Failed to send email after ${retries} attempts: ${error.message}`);
      }
    }
  }
};

const sendEmailOrderStatus = async (userId: string, message: string, retries = 3) => {
  let attempt = 0;
  while (attempt < retries) {
    try {
      const user = await authRepository.findUserByAttributes("id", userId);
      
      const result = await resend.emails.send({
        from: 'onboarding@resend.dev', // Hardcoded
        to: user.email,
        subject: "Order notification",
        text: message
      });
      
      console.log("✓ Order email response:", JSON.stringify(result, null, 2));
      console.log("Order status email sent successfully");
      break;
    } catch (error: any) {
      attempt++;
      console.error(`Attempt ${attempt} failed:`, error);
      if (attempt >= retries) {
        throw new Error(`Failed to send order status email after ${retries} attempts: ${error.message}`);
      }
    }
  }
};

const transporter = null;

export { sendEmail, transporter, sendEmailNotification, sendEmailOrderStatus };