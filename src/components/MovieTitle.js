import React from 'react'
import Button from './Button';
import InputSearch from './InputSearch';

const MovieTitle = ({ search, value, valueFunc }) => {

    return (
        <div className="purpleCont mgbtom">
            <div className="searchMovieCont">
                <label htmlFor="search">Movie Title :</label>
                <div className="ipcont">
                    <div className="icon"></div>
                    <InputSearch value={value} funcSearch={valueFunc} />
                    <Button func={search} text="Search" classs="enabled" />
                </div>
            </div>
        </div>
    )
}

export default MovieTitle
