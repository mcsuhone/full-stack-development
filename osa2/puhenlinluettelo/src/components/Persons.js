const Person = ({person}) => {
    return (
        <div> <p> {person.name} {person.number} </p> </div>
    )
}

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map(person => 
                <Person key={person.id} person={person} />
            )}
        </ul>
    )
}

export default Persons