import { useEffect, useState } from 'react'
import { withSessionSsr } from "@/utils/session"
import { formatDate } from '@/utils/utility'
import Calendar from '@/views/manager/calendar'
import Tasks from '@/views/manager/tasks'
import styles from '@/styles/manager/Manager.module.css'


export default function Manager(props) {
  const [viewSelect, setViewSelect] = useState(0)

  useEffect(() => {
  }, [])

  const selectView = (e) => {
    setViewSelect(Number(e.target.getAttribute('data-index')))
  }

  return (
    <div>
      <div className={styles.manager_selection}>
        <button className={
          viewSelect === 0 ? styles.manager_selection_button_selected : styles.manager_selection_button_unselected} data-index={0} onClick={selectView}>Calendar</button>
        <button className={
          viewSelect === 1 ? styles.manager_selection_button_selected : styles.manager_selection_button_unselected} data-index={1} onClick={selectView}>Tasks</button>
      </div>
      {viewSelect === 0 ?
        <Calendar />
      : ''}
      {viewSelect === 1 ?
        <Tasks />
      : ''}
    </div>
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
