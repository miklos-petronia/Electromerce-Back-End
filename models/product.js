
 // Get crucial elements of sequelize library
const { Model, DataTypes } = require('sequelize');

 //Error is caused within this code
 
 // const { all } = require('sequelize/types/lib/operators');

 // Get our database information connection from config javascript
const sequelize = require('../config/connection');

 // Run Product framework by extending off Sequelize's framework class
class Product extends Model { } 

 // Add fields and system for Product framework
Product.init(
    {
    //Uncommon ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
    //Product name pillar
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },

    //Product price pillar as a decimal number
        price: {
            type: DataTypes.DECIMAL(11, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        
    //Product stock pillar can only be a number 
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            }
        },
        
    //Category iddentifier acociates product to its various category.
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