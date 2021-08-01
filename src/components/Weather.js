import React, { useState, useEffect } from 'react'

import getCapitalWeather from '../services/restWeather'

const Weather = ({showCountry}) => {

const [capitalWeather, setCapitalWeather] = useState()

useEffect(() =>
getCapitalWeather(showCountry).then(e => setCapitalWeather(e)), [])

if(capitalWeather === undefined){
    return <p>Loading...</p>
} else {
console.log(capitalWeather)

return (
    <div>
    <h3>Weather in {showCountry}</h3>
    <h4>temperature: {capitalWeather.current.temperature} Celsius</h4>
    <img src={capitalWeather.current.weather_icons[0]}/>
    <p>wind: {capitalWeather.current.wind_speed} mph direction {capitalWeather.current.wind_dir}</p>
    </div>
)
}}


export default Weather