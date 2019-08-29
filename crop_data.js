var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_database'
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database Connected");
})

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let sql = "select * from crops";
let query = connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
})

var test = 0;

app.post('/', (req, res) => {
    console.log('Yep received something!');
    var crop_name = req.param('crop_name', null);
    console.log(crop_name);
    connection.query('select crop_name from crops', function (error, results, field) {
        if (error) throw error;
        var length = results.length;
        for (i = 0; i < length; i++) {
            if (results[i].crop_name === crop_name) {
                test = 1;
                console.log(crop_name);
            }
        }
        if (test === 1) {
            res.redirect('http://localhost:3000/cropdisplay');
        }
        else {
            res.status(400).json({ status: 'Not found' });
        }
    });
});

app.listen('4000', () => {
    console.log("Server started on port 4000");
})