const formatDate = (date) => {
  const offset = new Date().getTimezoneOffset()
  const tz = offset / 60
  let nDate = Date.parse(date)
  nDate = nDate - tz*6000*600

  return new Date(nDate).toLocaleString()
}

const checkJSON = (data) => {
  try {
    JSON.parse(data)
  } catch (error) {
    return false
  }
  return true
}

export { formatDate, checkJSON }
