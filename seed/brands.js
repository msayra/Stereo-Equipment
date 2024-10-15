'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed the database with stereo equipment brands
    await queryInterface.bulkInsert('Brands', [
      {
        name: 'Sony',
        country: 'Japan',
        establishedYear: 1946,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bose',
        country: 'USA',
        establishedYear: 1964,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pioneer',
        country: 'Japan',
        establishedYear: 1938,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harman Kardon',
        country: 'USA',
        establishedYear: 1953,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yamaha',
        country: 'Japan',
        establishedYear: 1887,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all records from the Brands table
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
