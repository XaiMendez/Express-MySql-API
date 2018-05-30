'use strict';
module.exports = (sequelize, DataTypes) => {
	var teacher = sequelize.define('teacher', {
		id: DataTypes.INTEGER,
		name: DataTypes.STRING
	}, {});

	teacher.associate = function(models) {
		teacher.belongsTo(models.career);
	};

	return teacher;
};