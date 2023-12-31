require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync()

//simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome To CloudWave!' })
});

require('./routes')(app, express.Router())

// set port, listen for requests
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})