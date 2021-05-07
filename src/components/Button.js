import React from 'react'

const Button = ({ text, classs }) => {
    return (
        <button className={classs}>{text}</button>
    )
}

export default Button
