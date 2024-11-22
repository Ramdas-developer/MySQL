const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const sequelize = require("./index");


    const Contact = sequelize.define(
      "Contact",
      {
         firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        current_address: {
          type: DataTypes.STRING,
          allowNull: false,  
        },
      },
      {
        // space for other model option
        tableName: "contacts",
        // timestamps: true,
        // createdAt: true,
        // updatedAt: "updatedAtTime",
        // timestamps : false     //defaults it is true
      }
    );
    console.log( "qwwwwwwwww:",Contact === sequelize.models.Contact);


module.exports = Contact;