
let connection;
var oracledb = require('oracledb');

(async function () {
    try {
        connection = await oracledb.getConnection({
            user: 'YOUR_DATABASE_USER', // oracle username - guessing its the cse17634 here 
            password: 'YOUR_DATABASE_PASSWORD', // well enter the oracle password - think oracle123
            connectString: 'localhost/yourorclpdb' // nned to add the database value here 
        });
        console.log("Successfully connected to Oracle!")
    } catch (err) {
        console.log("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }
})()


// Creating a Table in oracle

// await connection.execute(`CREATE TABLE employees(id NUMBER, name VARCHAR2(50), email VARCHAR2(100) )`);





































// All the below code may become useless - THINK BEFORE YOU START CODING

// const mysql = require('mysql');
// const express = require('express');

// const connection = mysql.createConnection({
//     host: 'oraclexe.amritanet.edu',
//     user: 'cse17602',
//     password: 'oracle123',
//     database: 'cse17602' // Insert Database name here
// })

// connection.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Database connected bitches!! Enjoy!");

// })

// const app = express();

// app.get('/getdata', (req, res) => {
//     let sql = 'select * from course;' // can put any table name here, basically just a mysql query 
//     let query = connection.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send("Data captured from table course");
//     })
// })



// app.listen('3000', () => {
//     console.log("Server started on port 3000");
// });

