import React from 'react'

const InputSearch = ({ value, funcSearch }) => {
    return (
        <input type="search" name="search" id="search" value={value} onChange={funcSearch} />
    )
}

export default InputSearch
