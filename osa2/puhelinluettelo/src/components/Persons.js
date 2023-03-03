const Person = ({person, deletePerson}) => {
    return (
        <div> <p> {person.name} {person.number} <button onClick={deletePerson}>delete</button></p> </div>
    )
}

const Persons = ({persons, deletePerson}) => {
    return (
        <ul>
            {persons.map(person => 
                <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />
            )}
        </ul>
    )
}

export default Persons