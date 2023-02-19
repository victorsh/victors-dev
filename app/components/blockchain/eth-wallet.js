import React from 'react'
import styles from '../../styles/Links.module.css'
import Image from 'next/image'

export default function EthWallet() {
  return (
    <button className={styles.button}>
      <img width={24} alt="Metamask" src='/eth-diamond-purple.png' />
    </button>
  )
}
