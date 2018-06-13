'use strict';


module.exports = (sequelize, DataTypes) => {
	var Group = sequelize.define('groups', {
		
		groupId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		/*courseId: {
			type: DataTypes.INTEGER,
      references: 'courses', // <<< Note, its table's name, not object name
      referencesKey: 'courseId' // <<< Note, its a column name
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      references: 'schedules', // <<< Note, its table's name, not object name
      referencesKey: 'scheduleId' // <<< Note, its a column name
    },
    teacherId: {
      type: DataTypes.INTEGER,
      references: 'teachers', // <<< Note, its table's name, not object name
      referencesKey: 'teacherId' // <<< Note, its a column name
    },*/

    }, {timestamps: false});

	Group.associate = function(models) {
		//Group.belongsTo(models.Course, {as: 'owner', foreignKey: {name: 'courseId', allowNull: false}});
		//Group.belongsTo(models.Schedule, {as: 'owner', foreignKey: {name: 'scheduleId', allowNull: false}});
	};

	return Group;
};