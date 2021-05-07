import React from 'react'

const Movie = ({ img, title, year, button }) => {
    return (
        <div className="movieCont">
            <div className="flexr">
                <div className="imgwdth">
                    <img className="movieImg" src={img} alt="movie" />
                </div>
                <div className="mvDeets">
                    <p className="movieTitle">{title}</p>
                    <p className="movieYear">{year}</p>
                </div>
            </div>
            <div className="btnWdth">
                {button} 
            </div>
        </div>
    )
}

export default Movie
