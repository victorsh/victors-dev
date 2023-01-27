'use strict'
require('dotenv').config()
const { Kafka } = new Kafka({})
const { Network, Alchemy } = require("alchemy-sdk")
const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0'

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_POLYGON_TESTNET,
  network: Network.MATIC_MUMBAI
})

// Algo
const token = process.env.PURESTAKE_API_KEY
const server = 'http://127.0.0.1'
const algo_port = ''
const client = new algosdk.Algodv2(token, server, algo_port)

app.get('/', async (req, res) => {
  res.send('hello!')
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);

  
})