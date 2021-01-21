"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "visits",
      [
        {
          countryId: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 9,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 9,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("visits", null, {});
  },
};
