import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import EthWallet from './blockchain/eth-wallet'
import PeraWallet from './blockchain/pera-wallet'
import MyAlgoWallet from './blockchain/my-algo-wallet'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Links.module.css'

function Links() {
  useEffect(() => {
  }, [])
  
  return (
    <div className={styles.links_container}>
      <div className={styles.links_wrapper}>
        <div>
          <Button className={styles.button}><Link className={styles.link} href='/'>Home</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Start</Link></Button>
          {/* <Button className={styles.button}><Link className={styles.link} href='/start'>Projects</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Experience</Link></Button> */}
          <Button className={styles.button}><Link className={styles.link} href='/about'>About</Link></Button>
        </div>
      </div>
      <div className={styles.wallets}>
        <EthWallet />
        <PeraWallet />
        <MyAlgoWallet />
      </div>
    </div>
  )
}

export default Links
