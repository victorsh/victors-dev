import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import EthWallet from '../blockchain/eth-wallet'
import PeraWallet from '../blockchain/pera-wallet'
import MyAlgoWallet from '../blockchain/my-algo-wallet'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Links.module.css'

function Links() {
  useEffect(() => {
  }, [])
  
  return (
    <div className={styles.links_container}>
      <div className={styles.links_wrapper}>
        <div>
          <Link className={styles.link} href='/'><Button className={styles.button}>Home</Button></Link>
          {/* <Link className={styles.link} href='/start'><Button className={styles.button}>Start</Button></Link> */}
          {/* <Button className={styles.button}><Link className={styles.link} href='/start'>Projects</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Experience</Link></Button> */}
          <Link className={styles.link} href='/about'><Button className={styles.button}>About</Button></Link>
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
