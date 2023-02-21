const CountryFullDescription = ({country}) => {
    console.log(country)
    return (
        <div>
            <h1> {country.name.common} </h1>
            <p> 
                capital {country.capital} \n <br />
                area {country.area}
            </p>

            <p style={{fontWeight: 'bold'}}> languages: </p>
            <ul>
                {Object.values(country.languages).map(lang =>
                    <li> {lang} </li>    
                )}
            </ul>

            <img src={country.flags.png}/>
        </div>
    )
}

const Countries = ({countries}) => {
    console.log('trying to print ' + countries.length + ' countries')
    
    if (countries.length === 0) {
        return (<p> No countries found. </p>)
    }
    else if (countries.length === 1) {
        return <CountryFullDescription country={countries[0]} />
    }
    else if (countries.length >= 10) {
        return (<p> Too many matches, specify another filter. </p>)
    }
    console.log(countries)
    return (
        <ul>
            {countries.map(country => 
                <li> {country.name.common} </li>
            )}
        </ul>
    )
}

export default Countries