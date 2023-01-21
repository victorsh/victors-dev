import React from 'react'
import styles from '../../styles/Links.module.css'
import { Button } from '@chakra-ui/react'
import Image from 'next/image'

export default function EthWallet() {
  return (
    <Button className={styles.button}>
      <Image width={20} height={40} alt="Metamask" src='/eth-diamond-purple.png' />
    </Button>
  )
}
