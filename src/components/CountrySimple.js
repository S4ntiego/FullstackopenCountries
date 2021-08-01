import React from 'react'
import Button from './Button'

const Country = ({name, handleClick}) => {
   return (
       <div>
           {name} <Button text="show" handleClick={handleClick} id={name}/>       
       </div>
   )
}

export default Country