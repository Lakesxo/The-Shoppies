import React from 'react'
import Nominations from './Nominations'
import Results from './Results'

const Flex = ({ sendItems, listArr, nomFunc, removeNomination }) => {
    const nonStyle = {display: "none"}
    const blkStyle = {display: "flex"}
    const mediaQuery = window.innerWidth <= 500
    const mbStyle = {display: "block"}
    let disp = {}

    if (mediaQuery && sendItems.length >= 1) {
        disp = mbStyle
    } else if (sendItems.length >= 1) {
        disp = blkStyle
    } else if (mediaQuery && listArr.length >= 1) {
        disp = mbStyle
    } else if (listArr.length >= 1) {
        disp = blkStyle
    } else {
        disp = nonStyle
    }
    

    return (
        <div style={disp} className="flex">
            <Results items={sendItems} nomFunc={nomFunc} listArr={listArr} />
            <Nominations list={listArr} removeNomination={removeNomination}/>
        </div>
    )
}

export default Flex
