const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: dbConfig.port,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.js")(sequelize, Sequelize);
db.students = require("./student.js")(sequelize, Sequelize);


db.tutorials.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});


module.exports = db;




