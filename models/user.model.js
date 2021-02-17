const db = require("../models");


module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    })
  
    return Users;
  };