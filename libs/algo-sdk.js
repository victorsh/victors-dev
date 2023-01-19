require('dotenv').config()
const algosdk = require('algosdk')
const port = ''
const token = {
    'X-API-Key': process.env.PURESTAKE_API_KEY
}

// ALGOD
const algodBaseServer = 'https://testnet-algorand.api.purestake.io/ps2'
const algodclient = new algosdk.Algodv2(token, algodBaseServer, port)

(async() => {
  let params = await algodClient.getTransactionParams().do()

  // NOTE: Using params to create "txn" and 
  // obtaining recoveredAccount are in the full GitHub example
  let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk)
  let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do()
  
  console.log("Transaction : " + sendTx.txId)
})().catch(e => {
    console.log(e)
});

// INDEXER
const indexerBaseServer = "https://testnet-algorand.api.purestake.io/idx2";
let indexerClient = new algosdk.Indexer(token, indexerBaseServer, port);

(async () => {
    let blockInfo = await indexerClient.lookupBlock(5).do()
    console.log(blockInfo)
})().catch(e => {
    console.log(e);
});