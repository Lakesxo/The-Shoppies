import React from 'react'
import Movie from './Movie'
import Button from './Button'

const Nominations = ({ list, removeNomination }) => {
    return (
        <div className="purpleCont hfwdth mgTop overScroll">
            <label htmlFor="nomination">Nominations :</label>
            {
                list.map(item => <Movie img={item.Poster} title={item.Title} year={item.Year} button={<Button text="Remove" func={() => removeNomination(item)} classs="enabled"/>} key={item.imdbID}/>)
            }
        </div>
    )
}

export default Nominations
