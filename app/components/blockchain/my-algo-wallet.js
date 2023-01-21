import React, { useEffect } from 'react'
import algosdk from 'algosdk'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import styles from '../../styles/Links.module.css'

export default function MyAlgoWallet() {
  const algodClient = new algosdk.Algodv2('', 'https://node.algoexplorerapi.io/', 443);
  let myAlgoWallet
  
  async function connectToMyAlgo() {
    console.log('clicked my algo connect')
    try {
      const accounts = await myAlgoWallet.connect()
      const addresses = accounts.map(account => account.address)
    } catch (err) {
      console.error(err)
    }
  }
  
  async function signTransaction(from, to, amount, suggestedParams) {
    try {
      const txn = algosdk.makePaymentTxnWithSuggestedParams({ suggestedParams, from, to, amount });
      const signedTxn = await myAlgoWallet.signTransaction(txn.toByte());  
      const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
      console.log(response)
    } catch(err) {
      console.error(err); 
    }
  }

  useEffect(() => {
    myAlgoWallet = new MyAlgoConnect()
  })
  return (
    <Button className={styles.button} onClick={() => connectToMyAlgo()}>
      <Image width={24} height={48} alt="MyAlgoWallet" src='/myalgo-logo.png' />
    </Button>
  )
}
