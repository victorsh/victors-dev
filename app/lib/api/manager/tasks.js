const getTasks = async () => {
  try {
    let tasks = await fetch('/api/manager/tasks', {
      method: 'GET'
    })
    tasks = await tasks.json()
    return tasks
  } catch (err) {
    console.error(err)
    return []
  }
}

const postTask = async (data) => {
  try {
    let task = await fetch('/api/manager/tasks', {
      method: 'POST',
      body: JSON.stringify({task: '', completed: false, completedAt: Date.now(), completedBy: 'vic', createdFor: 'vic'})
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

const updateTask = async (data) => {
  try {
    let task = await fetch('/api/manager/tasks', {
      method: 'UPDATE',
      body: JSON.stringify({task: '', completed: false, completedAt: Date.now(), completedBy: 'vic', createdFor: 'vic'})
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

const deleteTask = async () => {
  try {
    let task = await fetch('/api/manager/tasks', {
      method: 'DELETE'
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export {
  getTasks,
  postTask,
  updateTask,
  deleteTask,
}