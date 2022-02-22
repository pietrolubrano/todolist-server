const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then( res => console.log('Connected to db'))
    .catch(err => console.log(err))

const listener = app.listen(
    process.env.APP_LISTENING_PORT || 4000,
    () => console.log(`Listening on port: ${listener.address().port}`)
)

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/auth'))

app.get('/', (req, res) => {
    console.log('request')
    res.send({ pippo: 'ciao' })
})

app.get('/:name', (req, res) => {
    const name = req.params.name
    res.send(`ciao ${name}` )
})

