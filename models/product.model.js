const db = require("../models");

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("products", {
      name: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.INTEGER
      }
    });

    
    return Products;
  };