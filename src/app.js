const app = require('express')()

const primeRouter = require('./routes/prime')

app.use('/prime', primeRouter)

module.exports = app

