import { Button, Space } from 'antd'
import Link from 'next/link'
import styles from '../styles/Links.module.css'

function Links() {
  return (
    <div className={styles.links_container}>
      <div className={styles.links_wrapper}>
        <Space>
          <Button><Link className={styles.link} href='/'>Home</Link></Button>
          <Button><Link className={styles.link} href='/start'>Start</Link></Button>
          <Button><Link className={styles.link} href='/about'>About</Link></Button>
        </Space>
      </div>
      <div className={styles.wallets}>
        <Space>
          <Button>Metamask</Button>
          <Button>Pera</Button>
          <Button>MyAlgo</Button>
        </Space>
      </div>
    </div>
  )
}

export default Links
