import Header from '@/components/Header'
import Links from '@/components/Links'
import { DatePicker } from 'antd'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Links />
        <DatePicker />
        <div>Welcome to Victors Dev a website built by Victor for Victor.</div>
      </div>
    </>
  )
}
