'use strict'

const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0'

app.get('/', async (req, res) => {
  res.send('hello!')
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})