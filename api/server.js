'use strict'
require('dotenv').config()

const utils = require('../libs/utils')

// Setup server
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT
const host = process.env.HOST

// Setup alchemy
const { Network, Alchemy } = require("alchemy-sdk")
const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_POLYGON_TESTNET,
  network: Network.MATIC_MUMBAI
})

// Import Kafka
const kproducer = require('./kafka/producer')
const kconsumer = require('./kafka/consumer')

// Import ccxt
const exchange = require('./ccxt/index')

// ALGO Client
const algo_client = require('./algo/index')

;(async () => {
  // await kproducer()
  // await kconsumer()
  // await utils.sleep(5000)
  console.log(await exchange.fetchBalance())
})()

/**
 * API
 */
app.get('/', async (req, res) => {
  res.send('hello!')
})

app.get('/hello', async (req, res) => {
  res.send('hello world!')
})

app.listen(port, host, async () => {
  console.log(`Running on http://${host}:${port}`)
})
