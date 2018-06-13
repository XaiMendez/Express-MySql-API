'use strict';
module.exports = (sequelize, DataTypes) => {
	var Schedule = sequelize.define('schedules', {

		scheduleId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING
	}, {timestamps: false});

	Schedule.associate = function(models) {
		Schedule.hasMany(models.Group, {foreignKey: 'scheduleId'});
	};
	
	return Schedule;
};