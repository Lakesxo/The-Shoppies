import React from 'react'

const Button = ({ text, classs, func, disabled }) => {
    return (
        <button disabled={disabled} onClick={func} className={classs}>{text}</button>
    )
}

export default Button
