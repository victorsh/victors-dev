// Setup Purestake
const algosdk = require('algosdk')
const token = process.env.PURESTAKE_API_KEY
const server = 'http://127.0.0.1'
const algo_port = ''
const client = new algosdk.Algodv2(token, server, algo_port)

module.exports = client
