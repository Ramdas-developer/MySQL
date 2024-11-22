const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection")


  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING, 
      },
    },
    {
      // space for other model option
      tableName: "users",
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      // timestamps : false     //defaults it is true
    }
  );
  console.log(User === sequelize.models.User);

module.exports = User;










// const { DataTypes,Model } = require("sequelize");
// const sequelize = require("./index");

// class User extends Model {}

// User.init(
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
      
//   },
// },
//   {
    
//     sequelize, 
//     modelName: 'User', 
//     tableName: "users",
//   },
// );
// console.log(User === sequelize.models.User); 
// module.exports = User;