'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('groups', {
      groupId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      courseId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'courseId'
        },
      },
      teacherId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'teachers',
          key: 'teacherId'
        },
      },
      scheduleId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'schedules',
          key: 'scheduleId'
        },
      },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('groups');
  }
};