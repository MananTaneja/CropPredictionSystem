const Sequelize = require('sequelize');
const db = require('../database/db');
const User = require('/Users');


const Condition = db.define(
    'condition',
    {
        condition_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        climate: {
            type: Sequelize.INTEGER
        },
        pollination: {
            type: Sequelize.STRING
        },
        spacing: {
            type: Sequelize.INTEGER
        },
        moisture: {
            type: Sequelize.INTEGER
        }

    },
    {
        underscored: true,
        timestamps: false
    }
)

Condition.belongsTo(User);