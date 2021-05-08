import React, { useState, createContext } from 'react';
import InputSearch from './InputSearch'


export const MovieSearchContext = createContext();

export const SearchProvider = (props) => {
    const [search, setSearch] = useState(InputSearch.value)

    return(
        <MovieSearchContext.Provider value={[search, setSearch]}>
            {props.children}
        </MovieSearchContext.Provider>
    );
}