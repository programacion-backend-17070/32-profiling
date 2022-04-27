const app = require('express')()

const primeRouter = require('./routes/prime')
const fileRouter = require('./routes/file')

app.use('/prime', primeRouter)
app.use('/file', fileRouter)

module.exports = app

