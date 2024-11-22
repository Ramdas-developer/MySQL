const sequelize = require("../config/connection");
const Contact = require("./contactModel");
const User = require("./userModel");

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
  
  sequelize.sync({force:false})
  
  module.exports = sequelize;








  // const db = {};
  // db.sequelize = sequelize;
  // db.Sequelize = Sequelize;
  // db.Contact = require('./contactModel')(sequelize,DataTypes)
  // db.User    = require('./userModel')(sequelize,DataTypes)