import React from 'react'
import Language from '../components/Language'

const Languages = ({languages}) => {
    return (
    <ul>
    {languages.map((language) => <Language name={language.name} key={language.name}/>)}
    </ul>
    )}

export default Languages