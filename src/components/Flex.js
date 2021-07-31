import React from 'react'
import Nominations from './Nominations'
import Results from './Results'

const Flex = ({ sendItems, listArr, nomFunc, removeNomination, btnState }) => {
    return (
        <div className="flex">
            <Results items={sendItems} nomFunc={nomFunc} btnState={btnState} />
            <Nominations list={listArr} removeNomination={removeNomination}/>
        </div>
    )
}

export default Flex
