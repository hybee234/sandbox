const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Transaction extends Model {}

Transaction.init(
    {        
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true      
        },
        cost: {
            type: DataTypes.DECIMAL(10,2)    
        },
        transaction_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        qty_in: {
            type: DataTypes.INTEGER
        },
        qty_out: {
            type: DataTypes.INTEGER
        },
        notes: {
            type: DataTypes.STRING            
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'user_id',
            },
        },
        vintage_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'vintage',
                key: 'vintage_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction',
    }
);

 module.exports = Transaction;