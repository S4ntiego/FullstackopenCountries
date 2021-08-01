import React, { useState, useEffect } from 'react'

import Country from '../components/CountrySimple'
import CountryDetails from '../components/CountryDetails'

const Countries = ({countries, newSearch}) => {
    
    const [showCountry, setShowCountry] = useState()

    const countryShow = (event) => {
        setShowCountry(countries.filter((country) => country.name === event.target.id)[0])
    }

    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(newSearch.toLowerCase()))

    if (filteredCountries.length === 1){
        return (
            <CountryDetails countryDetails={filteredCountries[0]}/>
        )
    } 

    if (showCountry !== undefined){
        return (
            <CountryDetails countryDetails={showCountry}/>
        )
    }   

    if (newSearch === '')
    return (
        <ul>
            {filteredCountries.map((country) => <Country key={country.name} name={country.name} handleClick={countryShow} />)}
        </ul>
    )

    return (
        <ul>
            {filteredCountries.map((country) => <Country key={country.name} name={country.name} handleClick={countryShow} />)}
        </ul>
    )
}

export default Countries