// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//This code causes an error:
// const { all } = require('sequelize/types/lib/operators');
// import our database connection from config.js
const sequelize = require('../config/connection');