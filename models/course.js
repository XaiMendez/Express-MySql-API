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
		
	}, {});

	Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Group, {foreignKey: 'courseId'});
  };
  return Course;

};
