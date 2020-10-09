import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import styled, {keyframes} from 'styled-components'


const styledApp = styled.div`

  color: black
  display: flex;
  flex-wrap: wrap;

`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacter = () => {
      axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        debugger
      })
    }

    fetchCharacter()
  }, [])

  return (
    <styledApp className="App">
      <h1 className="Header">Character Heights</h1>
      {
        characters.map(char => {
          return <Character key={char.id} character={char} />
        })
      }
    </styledApp>
  );
}

export default App;
