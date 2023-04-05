import { useState, useEffect } from 'react'
import styles from '@/styles/manager/Tasks.module.css'
import { getTasks } from '@/lib/api/manager/tasks'

export default function Tasks(props) {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [asignee, setAsignee] = useState('vic')

  const loadTasks = async () => {
    setTasks([{name: 'Get Bread', complete: false}, {name: 'Get power cable', complete: true}])
  }

  const toggleChecked = (e) => {
    const holdTasks = []
    tasks.forEach(task => {
      if (task.name === e.target.value) {
        holdTasks.push({name: e.target.value, complete: e.target.checked})
      } else {
        holdTasks.push(task)
      }
    })

    setTasks(holdTasks)
  }

  const onInput = (e) => {
    setNewTask(e.target.value)
  }

  const handleAsignee = (e) => {
    setAsignee(e.target.value)
  }

  const submitTask = () => {
    console.log('submitting task')
  }

  const renderTasks = () => {
    return tasks.map(task => (
      <li key={task.name}>
        {task.name} {task.complete ?
          <input type='checkbox' value={task.name} checked={task.complete} onChange={e => toggleChecked(e)} /> :
          <input type='checkbox' value={task.name} checked={task.complete} onChange={e => toggleChecked(e)} />}
      </li>
    ))
  }

  useEffect(() => {
    loadTasks()
    getTasks().then(tasks => {
      console.log(tasks)
    })
  }, [])

  return (
    <div className={styles.tasks_container}>
      <div className={styles.tasks_input_container}>
        <div className={styles.tasks_new_task_title}>New Task</div>
        <input type='text' className={styles.tasks_input} onChange={onInput} value={newTask} />
        <label htmlFor='asignee'>Assign To</label>
        <select name='asignee' id='asignee' value={asignee} onChange={handleAsignee}>
          <option value='vic'>Vic</option>
          <option value='anna'>Anna</option>
        </select>
        <button onClick={submitTask}>Submit</button>
      </div>
      <div className={styles.tasks_title}>tasks</div>
      <ul>
        {renderTasks()}
      </ul>

    </div>
  )
}
