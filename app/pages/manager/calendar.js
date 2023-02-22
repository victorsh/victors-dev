import React, { useEffect, useState } from 'react'
import { withSessionSsr } from "@/utils/session"
import Header from '@/components/manager/Header'
import styles from '@/styles/manager/Calendar.module.css'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Calendar(props) {
  const [currentTime, setCurrentTime] = useState(null)
  const [selectedYear, setSelectedYear] = useState(2023)
  const [selectedMonth, setSelectedMonth] = useState(2)
  useEffect(() => {
    let current_time = new Date(Date.now())
    setCurrentTime(current_time.toString())

    let mDate = new Date()
    let pstDate = mDate.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles"
    })
  }, [])

  const changeMonth = (e) => {
    e.preventDefault()
    setSelectedMonth(e.target.value)
  }

  const changeYear = (e) => {
    e.preventDefault()
    setSelectedYear(e.target.value)
  }

  const onDayClick = (e) => {
    e.preventDefault()
  }

  const calendar_loop = (year, month) => {
    const days = new Date(year, month, 0).getDate()
    const first_week_day = new Date(year, month - 1, 1).getDay()
    const last_week_day = new Date(year, month - 1, days).getDay()
    // console.log(days, first_week_day, last_week_day)

    let pl_days = []

    for (let i = 0; i < first_week_day; i++) {
      pl_days.push(<div className={styles.calendar_box_item} key={new Date(selectedYear, selectedMonth, -1*i)} onClick={onDayClick}>{0}</div>)
    }
    for (let i = 1; i < days + 1; i++) {
      pl_days.push(<div className={styles.calendar_box_item} key={new Date(selectedYear, selectedMonth, i)}>{i}</div>)
    }

    let rows = []
    let cells = []

    let i = 0
    for (; i < pl_days.length; i++) {
      if (i % 7 === 0 && i !== 0) {
        rows.push(<div className={styles.calendar_box_row} key={i}>{cells}</div>)
        cells = []
      }
      cells.push(pl_days[i])
    }
    
    rows.push(<div className={styles.calendar_box_row} key={i}>{cells}</div>)
    return rows
  }

  return (
    <>
      <Header user={props.user}/>
      <div className={styles.calendar_wrapper}>
        <div className={styles.calendar_container}>
          <h1>Events Calendar</h1>
          <div className={styles.calendar_inputs}>
            <div className={styles.calendar_input}>
              <div>Set Year:</div>
              <input type="number" id="year-select" name="year-select" step="1" min="1970" max="2100" value={selectedYear} onChange={changeYear}/>
            </div>
            <div className={styles.calendar_input}>
              <div>Set Month:</div>
              <input type="number" id="month-select" name="month-select" step="0" min="1" max="12" value={selectedMonth} onChange={changeMonth} />
            </div>
          </div>
          <div className={styles.clendar_box}>
            {calendar_loop(selectedYear, selectedMonth)}
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withSessionSsr(async function ({req, res}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/manager/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return { props: { user: req.session.user }}
})
