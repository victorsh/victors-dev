'use strict'

const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0'

// Algo
const token = 'Your algod API token';
const server = 'http://127.0.0.1';
const algo_port = 8080;
const client = new algosdk.Algodv2(token, server, algo_port);

app.get('/', async (req, res) => {
  res.send('hello!')
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})