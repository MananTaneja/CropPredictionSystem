const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const db = require('./database/db');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

db.authenticate()
  .then(() => console.log('Datbase connected'))
  .catch((err) => console.log('Error' + err));


const Users = require('./routes/Users')

app.use('/users', Users)

// var Crops = require('./routes/Crops');

// app.use()

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
})
