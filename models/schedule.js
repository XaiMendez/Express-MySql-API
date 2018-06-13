'use strict';
module.exports = (sequelize, DataTypes) => {
	var schedule = sequelize.define('schedules', {

		scheduleId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING
	}, {});
	schedule.associate = function(models) {
    // associations can be defined here
  };
  return schedule;
};