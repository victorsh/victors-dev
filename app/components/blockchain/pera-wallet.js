import React, { useEffect } from 'react'
import { PeraWalletConnect } from "@perawallet/connect";
import { Button } from '@chakra-ui/react'

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
    <div>
      <Button onClick={() => pera_connect_wallet()}>Pera Wallet</Button>
    </div>
  )
}
