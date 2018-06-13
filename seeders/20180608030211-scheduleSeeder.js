'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
      return queryInterface.bulkInsert('schedules', [
      {
        name: '6:00 am - 8:00 am',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '8:00 am - 10:00 am',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    }
  };
