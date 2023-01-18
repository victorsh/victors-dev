import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import PeraWallet from '../components/blockchain/pera-wallet'
import MyAlgoWallet from '../components/blockchain/my-algo-wallet'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Links.module.css'

function Links() {
  useEffect(() => {
  }, [])
  
  return (
    <div className={styles.links_container}>
      <div className={styles.title_text}>
        <h1>Victors Dev</h1>
      </div>
      <div className={styles.links_wrapper}>
        <div>
          <Button className={styles.button}><Link className={styles.link} href='/'>Home</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Start</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Projects</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/start'>Experience</Link></Button>
          <Button className={styles.button}><Link className={styles.link} href='/about'>About</Link></Button>
        </div>
      </div>
      <div className={styles.wallets}>
        <Button className={styles.button}>
          <Image width={20} height={40} alt="Metamask" src='/eth-diamond-purple.png' />
        </Button>
        <PeraWallet className={styles.button} />
        <MyAlgoWallet className={styles.button} />
      </div>
    </div>
  )
}

export default Links
