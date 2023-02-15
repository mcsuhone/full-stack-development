import { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import personService from './services/personService.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(foundPersons => {
        console.log('promise fulfilled')
        setPersons(foundPersons)
      })
  }
  
  useEffect(hook, [])

  const clearFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        clearFields()
      })
      .catch(error => {
        console.log('adding person failed')
      })
  }

  const updatePerson = (id) => {
    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService
      .update(id, personObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : personObject))
        clearFields()
      })
      .catch(error => {
        console.log('replacing number failed')
      })
  }
  
  const submitForm = (event) => {
    event.preventDefault()
    console.log('submitting form...')
    const personIndex = persons.map( person => person.name ).indexOf(newName)
    
    if (personIndex !== -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(personIndex + 1)
        console.log('form submitted')
      }
    }
    else {
      addPerson()
      console.log('form submitted')
    }
  }

  const deletePerson = (id) => {
    console.log('delete person ' + id)
    const deletePerson = persons.find(p => p.id === id)
  
    personService
      .del(deletePerson.id)
      .then(()  => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        alert(
          `the person '${deletePerson.name}' was already deleted from server`
        )
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = (newFilter === '')
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handleFilterChange={handleFilterChange} filterValue={newFilter}/>

      <h3> Add a new </h3>

      <PersonForm onSubmitFunc={submitForm} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />

      <h3>Numbers</h3>
      
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
      
    </div>
  )

}

export default App