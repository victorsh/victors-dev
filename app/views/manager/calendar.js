import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import styles from '@/styles/manager/Calendar.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Calendar(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [eventName, setEventName] = useState('Some event')
  const [eventStartDate, setEventStartDate] = useState('01-01-2023')
  const [eventEndDate, setEventEndDate] = useState('01-02-2023')
  const [eventStartTime, setEventStartTime] = useState('01:00')
  const [eventEndTime, setEventEndTime] = useState('20:00')

  const [selectedYear, setSelectedYear] = useState(2023)
  const [selectedMonth, setSelectedMonth] = useState(3)

  useEffect(() => {
    let mDate = new Date()
    let pstDate = mDate.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles"
    })
  }, [])

  const openModal = (e) => {
    e.preventDefault()
    console.log(new Date(e.target.getAttribute('data-index')).toISOString().replace(/T.*/,'').split('-').reverse().join('-'))
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const changeMonth = (e) => {
    e.preventDefault()
    setSelectedMonth(e.target.value)
  }

  const changeYear = (e) => {
    e.preventDefault()
    setSelectedYear(e.target.value)
  }

  const calendar_loop = (year, month) => {
    month = Number(month)
    const current_month = Number(month)

    let prev_month_year = year
    let post_month_year = year
    if (month - 2 < 0) {
      prev_month_year = year - 1
    }
    if (month > 11) {
      post_month_year = year + 1
    }

    const prev_month = month - 1 < 1 ? 12 : month - 1
    const next_month = month > 11 ? 1 : month + 1

    const days = new Date(year, month, 0).getDate()
    const first_week_day = new Date(year, month - 1, 1).getDay()
    const last_month_days = new Date(year, prev_month, 0).getDate()

    let pl_days = []

    for (let i = last_month_days - first_week_day; i < last_month_days; i++) {
      pl_days.push(
        <div
          className={styles.calendar_box_item_prev}
          key={new Date(prev_month_year, prev_month - 1, i + 1)}
          data-index={new Date(year, current_month - 1, i)}
          onClick={openModal}
        >
          <div>{i + 1}</div>
        </div>
      )
    }
    for (let i = 1; i < days + 1; i++) {
      pl_days.push(
        <div className={styles.calendar_box_item} key={new Date(year, current_month - 1, i)} data-index={new Date(year, current_month - 1, i)} onClick={openModal}>
          <div className={styles.calendar_date_day}>{i}</div>
        </div>
      )
    }

    let rows = []
    let cells = []

    let i = 0
    for (; i < pl_days.length; i++) {
      if (i % 7 === 0 && i !== 0) {
        rows.push(
          <div className={styles.calendar_box_row} key={i}>
            {cells}
          </div>
        )
        cells = []
      }
      cells.push(pl_days[i])
    }
    
    const remaining_days = 7 - cells.length
    for (let j = 0; j < remaining_days; j++) {
      cells.push(
        <div className={styles.calendar_box_item_prev} key={new Date(post_month_year, next_month - 1, j + 1)} data-index={new Date(year, current_month - 1, i)} onClick={openModal}>
          <div>{j + 1}</div>
        </div>
      )
    }
    rows.push(<div className={styles.calendar_box_row} key={i}>{cells}</div>)
    return rows
  }

  return (
    <div className={styles.calendar_wrapper}>
      <div className={styles.calendar_container}>
        
        <h1>Events Calendar</h1>

        {modalIsOpen ? 
          <div className={styles.modal_wrapper}>
            <div className={styles.modal_content}>

              <div className={styles.modal_header}>
                <div className={styles.modal_title}>Create Event</div>
                <button className={styles.modal_close} onClick={closeModal}>X</button>
              </div>
              
              <div className={styles.modal_create}>
              
                <div className={styles.modal_event_container}>
                  <div className={styles.modal_event_label}>Event Label</div>
                  <input className={styles.modal_event_input} type='text'  />
                </div>
              
                <div className={styles.modal_datetime_input}>
                  <div>
                    <div className={styles.modal_event_label}>Start Date</div>
                    <input className={styles.modal_date_input} type='date' value="02-28-2023"/>
                    <input className={styles.modal_time_input} type='time' value="18:00"/>
                  </div>
                  <div>
                    <div className={styles.modal_event_label}>End Date</div>
                    <input className={styles.modal_date_input} type='date' value="03-01-2023"/>
                    <input className={styles.modal_time_input} type='time' value="07:00"/>
                  </div>
                </div>
              
                <div className={styles.modal_create_submit_container}>
                  <button className={styles.modal_create_submit}>Create</button>
                </div>
              </div>
            </div>
          </div>
        : ''}

        {/* Calendar date input */}
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
  )
}