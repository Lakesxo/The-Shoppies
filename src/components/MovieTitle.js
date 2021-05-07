import React from 'react'

const MovieTitle = () => {
    return (
        <div className="purpleCont mgbtom">
            <div className="searchMovieCont">
                <label htmlFor="search">Movie Title :</label>
                <div className="ipcont">
                    <div className="icon"></div>
                    <input type="search" name="search" id="search" />
                </div>
            </div>
        </div>
    )
}

export default MovieTitle
