import React, { useEffect, useState, useContext } from 'react'
import Movie from './Movie'
import Button from './Button'
import axios from 'axios'
import {MovieSearchContext} from './MovieSearchContext'
import InputSearch from './InputSearch'


const Results = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useContext(MovieSearchContext);
    useEffect(() => {
        axios(`http://www.omdbapi.com/?s=${search}&apikey=6d0a4f7b&`)
          .then((result) => {
              setItems(result.data.Search)
            }
          ).catch((err)=> {
            console.log(err)
          })
      }, [])


    return (
        <div className="purpleCont hfwdth overScroll">
            <label htmlFor="Results">Results :</label>
            {
                items.map(item => <Movie img={item.Poster} title={item.Title} year={item.Year} button={<Button text="Nominate" classs="enabled"/>} key={item.imdbID}/>)
            }
        </div>
    )
}

export default Results