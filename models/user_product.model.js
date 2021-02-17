const db = require("../models");
const Users = db.users;
const Products = db.products;

module.exports = (sequelize, DataTypes) => {
  const user_products = sequelize.define('user_products', {}, { timestamps: false });
  Users.belongsToMany(Products, { through: user_products});

  return user_products;
};  