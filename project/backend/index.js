const express = require('express')
const app = express()
const db = require('./models')


db.sequelize.sync().then(() => {

app.listen(5000, () => {
    console.log('the bloody server is running on port 5k.  bloody hell')
})


})

