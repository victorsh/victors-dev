const getEvents = async () => {
  try {
    let days = await fetch('/api/manager/calendars', {
      method: 'GET',
    })
    days = await days.json()
    return days
  } catch (error) {
    console.error(error)
  }
}

const getEventTypes = async () => {
  try {
    let events = await fetch('/api/manager/calendar', {
      method: 'GET'
    })
    events = await events.json()
    return events
  } catch (error) {
    console.error(error)
  }
}

export { getEvents, getEventTypes }
