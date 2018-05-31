'use strict';
module.exports = (sequelize, DataTypes) => {
	var teacher = sequelize.define('teacher', {

		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		}
		name: DataTypes.STRING
		
	}, {});

	teacher.associate = function(models) {
		teacher.belongsTo(models.career);
	};

	return teacher;
};