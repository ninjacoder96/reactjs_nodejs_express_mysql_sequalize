module.exports = app => {
    const user_products = require("../controllers/user_products.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", user_products.findAll);
  
  
    app.use('/api/user_products', router);
  };