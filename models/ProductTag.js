const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
    {
        // define columns
        // Unique Identifier
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        // Product Tag Name Column
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "product",
                key: "id"
            }
        },
        // Product Tag Id column
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "tag",
                key: "id"
            }
        }
    },
    {