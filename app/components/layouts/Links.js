import { useEffect } from 'react'
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
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/about'>About</Link>
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
