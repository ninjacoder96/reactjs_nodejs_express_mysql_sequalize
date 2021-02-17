const db = require("../models");
const User = db.users
const Products = db.products;
const UserProducts = db.user_products;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    User.findAll({ 
        where: condition, 
          include: [{
            model: Products,
            as: 'products',
        }]
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
