import React from 'react'
import Movie from './Movie'
import Button from './Button'


const Results = ({ items, nomFunc, listArr }) => {
  return (
    <div className="purpleCont hfwdth overScroll">
      <label htmlFor="Results">Results :</label>
      {
        items.map(item => <Movie img={item.Poster} title={item.Title} year={item.Year} button={<Button text="Nominate" disabled={listArr.includes(item)} func={() => nomFunc(item)} classs={listArr.includes(item) ? "disabled"  : "enabled"} />} key={item.imdbID}/>)
      }
    </div>
  )
}

export default Results