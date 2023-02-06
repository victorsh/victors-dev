'use strict'
require('dotenv').config()
const ccxt = require('ccxt')

//ccxt
// console.log (ccxt.exchanges)
const exchangeId = 'mexc3'
const exchangeClass = ccxt[exchangeId]
const exchange = new exchangeClass({
  apiKey: process.env.MEXC_KEY,
  secret: process.env.MEXC_SECRET
})

module.exports = exchange
// console.log(await exchange.fetchBalance())