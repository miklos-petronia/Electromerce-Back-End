// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//This code causes an error:
// const { all } = require('sequelize/types/lib/operators');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { } 

// set up fields and rules for Product model
Product.init(
    {
        //Unique identifier
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //Product name column
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        //Product price column as a decimal number
        price: {
            type: DataTypes.DECIMAL(11, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        //Product stock column can only be a number 
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            }
        },
        //Category id links product to its respective category.
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "id"
            }
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
}
);

module.exports = Product;