const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);

// db.user_products = require("./user_product.model.js")(sequelize, Sequelize);

db.users.belongsToMany(db.products,{
  through: 'user_products',
  timestamps:false
});


db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

module.exports = db;