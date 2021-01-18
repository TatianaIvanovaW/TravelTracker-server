"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "visits",
      [
        {
          countryId: "RUS",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: "DZA",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: "DZA",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: "RUS",
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
