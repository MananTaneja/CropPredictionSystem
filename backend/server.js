const mysql = require('mysql');
const express = require('express');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'mydb'
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database connected bitches!! Enjoy!");
})

const app = express();



app.listen('3000', () => {
    console.log("Server started on port 3000");
});

