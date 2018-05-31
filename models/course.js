'use strict';
module.exports = (sequelize, DataTypes) => {
	var course = sequelize.define('course', {

		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING
		
	}, {});

	course.associate = function(models) {
    // associations can be defined here
  };
  return course;

};