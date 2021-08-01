import React from 'react'

import Languages from '../components/Languages'
import Weather from '../components/Weather'

const CountryDetails = ({countryDetails}) => {
    return (
        <div>
            <h2>{countryDetails.name}</h2>
            capital {countryDetails.capital}
            <br/>
            population {countryDetails.population}
            <h3>languages</h3>
            <Languages languages={countryDetails.languages}/>
            <img width={300} border="5" src={countryDetails.flag}/>
            <Weather showCountry={countryDetails.capital}/>
        </div>
    )
}

export default CountryDetails