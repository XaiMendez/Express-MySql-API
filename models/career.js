'use strict';
module.exports = (sequelize, DataTypes) => {
	var career = sequelize.define('career', {
		id: DataTypes.INTEGER,
		name: DataTypes.STRING
	}, {});

	career.associate = function(models) {
		career.hasMany(models.teacher);
	};

	return career;
};