import React from 'react'
import MovieTitle from './MovieTitle'
import Flex from './Flex'

const Body = ({ itemsFromProps, handleFunc, value, funcValue, nomList, nomFunc, removeNomination }) => {
    return (
        <div className ="pad">
            <MovieTitle search={handleFunc} value={value} valueFunc={funcValue} />
            <Flex sendItems={itemsFromProps} listArr={nomList} nomFunc={nomFunc} removeNomination={removeNomination} />
        </div>
    )
}

export default Body
