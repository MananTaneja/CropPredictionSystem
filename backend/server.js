const mysql = require('mysql');
const express = require('express');

const connection = mysql.createConnection({
    host: 'oraclexe.amritanet.edu',
    user: 'cse17602',
    password: 'oracle123',
    database: 'cse17602' // Insert Database name here
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database connected bitches!! Enjoy!");

})

app.get('/getdata', (req, res) => {
    let sql = 'select * from course;' // can put any table name here, basically just a mysql query 
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Data captured from table course");
    })
})

const app = express();



app.listen('3000', () => {
    console.log("Server started on port 3000");
});

