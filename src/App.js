import React, { useState, useEffect } from 'react'
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header'
import Text from './components/Text';
import axios from 'axios';
import Me from './components/Me';

function App() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const [nominationList, setNominationList] = useState([])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem('nominated-movies', JSON.stringify(items))
  }

  const handleNomination = (movie) => {
    if (nominationList.length <= 4) {
      const nomArr = [...nominationList, movie]
      setNominationList(nomArr)
      saveToLocalStorage(nomArr)
    }
  }

  const removeNomination = (movie) => {
    const updatedArr = nominationList.filter(fave => fave.imdbID !== movie.imdbID)
    setNominationList(updatedArr)
    saveToLocalStorage(updatedArr)
  }

  const handleSearch = () => {
    if (input !== ''){
      axios(`https://www.omdbapi.com/?s=${input}&apikey=6d0a4f7b&`)
        .then(result => {
          if (result.data.Response === 'True'){
            setItems(result.data.Search)
          }
        }
        ).catch(err => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    const faveList = JSON.parse(localStorage.getItem('nominated-movies'))
    if (faveList){
      setNominationList(faveList)
    }
  }, [])

  useEffect(() => {
    if (nominationList.length === 5) {
      alert('You have reached the maximum number of 5 nominations')
    } 
  }, [nominationList])



  return (
    <>
      <Header />
      <Text />
      <Body 
        itemsFromProps={items} handleFunc={handleSearch} value={input} funcValue={handleChange} 
        nomList={nominationList} nomFunc={handleNomination} removeNomination={removeNomination}
       />
      <Me />
      <Footer />
    </>
  );
}

export default App;
