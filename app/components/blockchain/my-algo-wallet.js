// https://github.com/nahomHmichael/NFT-certificate-dAPP/blob/c5082add4423858c8dfdc042dd35b462c0f49915/frontend/provider/context.js
// https://github.com/Destiny-01/algo-101/tree/a1d2c63d9c1bd0407f21f5b9139fea53e4820d6e
import React, { useEffect, useRef, useState } from 'react'
import algosdk from 'algosdk'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import styles from '../../styles/Links.module.css'

export default function MyAlgoWallet() {
  const algodClient = new algosdk.Algodv2('', 'https://node.algoexplorerapi.io/', 443);

  const [addresses, setAddresses] = useState()
  const myAlgoWallet = useRef()
  
  async function connect() {
    console.log('clicked my algo connect')
    try {
      if (!myAlgoWallet.current) {
        console.error('MyAlgo wallet failed to initialize.')
      }

      const accounts = await myAlgoWallet.current.connect()
      const _addresses = accounts.map(account => account.address)
      setAddresses(_addresses)
      updateAddresses(_addresses)
    } catch (err) {
      console.error('MyAlgo Wallet failed to connect.', err)
    }
  }
  
  async function signTransaction(from, to, amount, suggestedParams) {
    try {
      const txn = algosdk.makePaymentTxnWithSuggestedParams({ suggestedParams, from, to, amount });
      const signedTxn = await myAlgoWallet.signTransaction(txn.toByte());  
      const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
      console.log(response)
    } catch(err) {
      console.error('MyAlgo Wallet failed to connect.', err)
    }
  }
  useEffect(() => {
    const initMyAlgoWallet = async () => {
      const MyAlgoWallet = (await import('@randlabs/myalgo-connect')).default
      myAlgoWallet.current = new MyAlgoWallet()
    }
    initMyAlgoWallet()
  }, [])

  return (
    <Button className={styles.button} onClick={() => connect()}>
      <Image width={24} height={48} alt="MyAlgoWallet" src='/myalgo-logo.png' />
    </Button>
  )
}
