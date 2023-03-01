import { useState, useEffect } from 'react'
import styles from '@/styles/manager/Tasks.module.css'

export default function Tasks(props) {
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    setTasks([{name: 'Get Bread', complete: false}, {name: 'Get power cable', complete: true}])
  }

  const renderTasks = () => {
    return tasks.map(task => (
      <li key={task.name}>{task.name} {task.complete ? <input type='checkbox' value={task.name} checked /> : <input value={task.name} type='checkbox' />}</li>
    ))
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div className={styles.tasks_container}>
      <div className={styles.tasks_title}>tasks</div>
      <ul>
        {renderTasks()}
      </ul>
    </div>
  )
}
