const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Wine extends Model {}

Wine.init(
    {        
        wine_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true      
        },
        wine_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'brand',
                key: 'brand_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Wine',
    }
);

module.exports = Wine;