import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import Notification from './components/Notification.js'
import Countries from './components/Countries.js'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('notification')
  const [countries, setCountries] = useState(null)

  const hook = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [newFilter])

  const setTimedNotification = (message, type='notification') => {
    setNotificationType(type)
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 3000)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  if (countries === null) {
    return null
  }

  const countriesToShow = (newFilter === '')
    ? countries 
    : countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
  
  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} filterValue={newFilter}/>

      <Notification message={notificationMessage} type={notificationType}/>

      <Countries countries={countriesToShow} />

    </div>
  )

}

export default App