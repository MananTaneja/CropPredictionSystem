const express = requrie('express')
const crops = express.Router();
const cors = require('cors');

const Crops = require('../models/Crop_Area');
crops.use(cors())

crops.post('/datasend', (req, res) => {
    Crops.findOne({
        where: {
            crop_name: req.body.crop_name;
        }
    })
        .then(crop => {
            // Come here of crop does exist in the database
            res.send();
        })
        .catch(err => {
            res.status(400).json({ error: err });
        })
})


module.exports = crops