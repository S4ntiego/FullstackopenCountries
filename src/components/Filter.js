import React from 'react'

const Filter = ({newSearch, handleSearchChange}) => {
    return (
        <form>
            find countries <input value={newSearch} onChange={handleSearchChange}/>
        </form>
        
    )
}

export default Filter