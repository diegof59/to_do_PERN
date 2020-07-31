const express = require('express')

const api_endpoints = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api_endpoints)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))