import React from 'react'

const Button = ({ text, classs, func }) => {
    return (
        <button onClick={func} className={classs}>{text}</button>
    )
}

export default Button
