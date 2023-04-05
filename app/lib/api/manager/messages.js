const getMessages = async () => {
  try {
    let messages = await fetch('/api/manager/message', {
      method: 'GET',
    })
    messages = await messages.json()
    return messages
  } catch (error) {
    console.error(error)
    return []
  }
  return []
}

const deleteMessage = async (id) => {
  e.preventDefault()
  try {
    let messages = await fetch('/api/manager/message', {
      method: 'DELETE',
      body: JSON.stringify({id: id})
    })
  } catch (error) {
    console.error(error)
  }
}