const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
    {
    // define pillar
    // Unique ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
    // Product Tag Name Pillar
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "product",
                key: "id"
            }
        },
    
 // Product Tag Id Pillar
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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;