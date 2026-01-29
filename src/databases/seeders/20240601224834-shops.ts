import { QueryInterface } from "sequelize";
import { shopFiveId, shopFourId, shopOneId, shopSixId, shopThreeId, shopTwoId, userFiveId, userFiveTeenId, userFourId, userFourTeenId, userSevenId, userSixId } from "../../types/uuid";

const shopOne = {
    id: shopOneId,
    name: "AgriTools Depot",
    userId: userFourId,
    description: "Your one-stop shop for the latest agricultural tools and equipment.",
    createdAt: new Date(),
    updatedAt: new Date()
}

const shopTwo = {
    id: shopTwoId,
    name: "GreenThumb Supplies",
    userId: userSevenId,
    description: "Bringing you the best in seeds, fertilizers, and gardening supplies.",
    createdAt: new Date(),
    updatedAt: new Date()
}

const shopThree = {
    id: shopThreeId,
    name: "FarmFresh Market",
    userId: userFourTeenId,
    description: "Premium produce and farm supplies for every season.",
    createdAt: new Date(),
    updatedAt: new Date()
}

const shopFour = {
    id: shopFourId,
    name: "Harvest Haven",
    userId: userSixId,
    description: "Explore a world of organic farming and sustainable agriculture.",
    createdAt: new Date(),
    updatedAt: new Date()
}

const shopFive = {
    id: shopFiveId,
    name: "Rural Essentials",
    userId: userFiveId,
    description: "Everything you need to make your farm thrive.",
    createdAt: new Date(),
    updatedAt: new Date()
}

const shopSix = {
    id: shopSixId,
    name: "AgriMart",
    userId: userFiveTeenId,
    description: "Your trusted source for all things agriculture.",
    createdAt: new Date(),
    updatedAt: new Date()
}

export const up = async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("shops", [shopOne, shopTwo, shopThree, shopFour, shopFive, shopSix]);
};

export const down = async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("shops", {});
};