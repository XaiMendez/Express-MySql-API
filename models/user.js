'use strict';
module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('users', {

    id: {
    	type: DataTypes.INTEGER,
    	primaryKey: true,
    	autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {});

  user.associate = function(models) {
    // associations can be defined here
  };

  return user;
};