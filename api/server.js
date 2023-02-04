'use strict'
require('dotenv').config()

const utils = require('../libs/utils')

const { Network, Alchemy } = require("alchemy-sdk")
const ccxt = require('ccxt')
const algosdk = require('algosdk')
const express = require('express')

const kproducer = require('./kafka/producer')
const kconsumer = require('./kafka/consumer')

// Setup server
const app = express()
const port = 8082
const host = '0.0.0.0'

// Setup alchemy
const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_POLYGON_TESTNET,
  network: Network.MATIC_MUMBAI
})

// Setup Purestake
const token = process.env.PURESTAKE_API_KEY
const server = 'http://127.0.0.1'
const algo_port = ''
const client = new algosdk.Algodv2(token, server, algo_port)

//ccxt
// console.log (ccxt.exchanges)
const exchangeId = 'mexc3'
const exchangeClass = ccxt[exchangeId]
const exchange = new exchangeClass({
  apiKey: process.env.MEXC_KEY,
  secret: process.env.MEXC_SECRET
})

;(async () => {
  await kproducer()
  await kconsumer()
  await utils.sleep(5000)
})()


/**
 * API
 */
app.get('/', async (req, res) => {
  res.send('hello!')
})

app.listen(port, host, async () => {
  console.log(`Running on http://${host}:${port}`)
  // console.log(await exchange.fetchBalance())
})
