import EthWallet from '../blockchain/eth-wallet'
import PeraWallet from '../blockchain/pera-wallet'
import Link from 'next/link'
import styles from '../../styles/Links.module.css'

function Links() {
  return (
    <div className={styles.links_container}>
      <div className={styles.links_wrapper}>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/about'>About</Link>
        <Link href='https://t4-vert.vercel.app/' className={styles.link}>T4 App</Link>
      </div>
      <div className={styles.wallets}>
        <EthWallet />
        <PeraWallet />
      </div>
    </div>
  )
}

export default Links
