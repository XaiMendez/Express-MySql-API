'use strict';

module.exports = (sequelize, DataTypes) => {
	var Course = sequelize.define('course', {

		courseId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		
	}, {});

	Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Group, {foreignKey: 'courseId'});
};
return Course;

};
