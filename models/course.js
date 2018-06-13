'use strict';

module.exports = (sequelize, DataTypes) => {
	var Course = sequelize.define('courses', {

		courseId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		code: DataTypes.STRING,
		name: DataTypes.STRING,
		
	}, {timestamps: false});

	Course.associate = function(models) {
		Course.hasMany(models.Group, {foreignKey: 'courseId'});
	};
	return Course;

};
