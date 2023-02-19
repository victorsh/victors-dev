import React, { useEffect } from 'react'
import Image from 'next/image'
import { PeraWalletConnect } from "@perawallet/connect";
import { Button } from '@chakra-ui/react'
import styles from '../../styles/Links.module.css'

export default function PeraWallet() {
  const peraWallet = new PeraWalletConnect()  
  const pera_reconnect_session = () => {
    peraWallet
    .reconnectSession()
    .then((accounts) => {
      peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
  
      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    })
    .catch((e) => console.log(e));
  }
  
  const pera_connect_wallet = async () => {
    peraWallet
    .connect()
    .then((newAccounts) => {
      peraWallet.connector.on("disconnect", handleDisconnectWalletClick);
  
      setAccountAddress(newAccounts[0]);
    })
    .catch((error) => {
      if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    pera_reconnect_session()
  })
  return (
    <button className={styles.button} onClick={() => pera_connect_wallet()}>
      <Image width={24} height={24} alt="PeraWallet" src='/pera-logomark-black.png' />
    </button>
  )
}
