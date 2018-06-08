'use strict';


module.exports = (sequelize, DataTypes) => {
	var Group = sequelize.define('group', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		courseId: {
			type: DataTypes.INTEGER,
              references: 'courses', // <<< Note, its table's name, not object name
              referencesKey: 'courseId' // <<< Note, its a column name
            },
          }, {});

	Group.associate = function(models) {
		Group.belongsTo(models.Course, {as: 'owner', foreignKey: {name: 'courseId', allowNull: false}});
	};

	return Group;
};