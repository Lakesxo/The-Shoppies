import React, { useEffect, useState, useContext } from 'react'
import Button from './Button'
import InputSearch from './InputSearch';
import {MovieSearchContext} from './MovieSearchContext'

const MovieTitle = () => {
    const [search, setSearch] = useContext(MovieSearchContext);

    return (
        <div className="purpleCont mgbtom">
            <div className="searchMovieCont">
                <label htmlFor="search">Movie Title :</label>
                <div className="ipcont">
                    <div className="icon"></div>
                    <InputSearch value={search}/>
                </div>
            </div>
        </div>
    )
}

export default MovieTitle
