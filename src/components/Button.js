import React from 'react'

const Button = ({handleClick, text, id}) => {
    return (
        <button id={id} onClick={handleClick}>{text}</button>
    )
}

export default Button