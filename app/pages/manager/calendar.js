import React, { useEffect } from 'react'
import styles from '@/styles/manager/Calendar.module.css'

export default function Calendar() {
  useEffect(() => {
    console.log(Date.now())
  }, [])
  return (
    <div>calendar</div>
  )
}