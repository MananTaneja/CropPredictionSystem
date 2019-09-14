const Sequelize = require('sequelize');
const db = require('../database/db');

const Crop = db.define(
    'crop',
    {
        crop_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        crop_name: {
            type: Sequelize.STRING
        },
        area_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)

Crop.sync({ alter: true }).then(
    console.log('Table synced on alter of table')
)


module.exports = Crop