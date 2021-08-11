import React from 'react'
import Nominations from './Nominations'
import Results from './Results'

const Flex = ({ sendItems, listArr, nomFunc, removeNomination }) => {
    const nonStyle = {display: "none"}
    const blkStyle = {display: "flex"}

    return (
        <div style={sendItems.length >= 1 ? blkStyle : nonStyle} className="flex">
            <Results items={sendItems} nomFunc={nomFunc} listArr={listArr} />
            <Nominations list={listArr} removeNomination={removeNomination}/>
        </div>
    )
}

export default Flex
