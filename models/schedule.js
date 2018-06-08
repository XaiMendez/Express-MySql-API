'use strict';
module.exports = (sequelize, DataTypes) => {
  var schedule = sequelize.define('schedule', {
    name: DataTypes.STRING
  }, {});
  schedule.associate = function(models) {
    // associations can be defined here
  };
  return schedule;
};