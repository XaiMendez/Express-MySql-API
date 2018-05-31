'use strict';
module.exports = (sequelize, DataTypes) => {
	var career = sequelize.define('career', {
		
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING
		
	}, {});

	career.associate = function(models) {
		career.hasMany(models.teacher);
	};

	return career;
};