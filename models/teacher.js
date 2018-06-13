'use strict';
module.exports = (sequelize, DataTypes) => {
	var teacher = sequelize.define('teachers', {

		teacherId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		code: DataTypes.STRING,
		name: DataTypes.STRING,
		
	}, {});

	teacher.associate = function(models) {
		//teacher.belongsTo(models.career);
	};

	return teacher;
};