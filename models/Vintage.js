const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Vintage extends Model {}

Vintage.init(
    {        
        vintage_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true      
        },
        vintage: {
            type: DataTypes.INTEGER,  
            allowNull: false,
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drink_by: {
            type: DataTypes.INTEGER            
        },
        vintage_total: {
            type: DataTypes.INTEGER,
            defaultValue: 0,            
        },
        active_ind: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        wine_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'wine',
                key: 'wine_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vintage',
    }
);

module.exports = Vintage;