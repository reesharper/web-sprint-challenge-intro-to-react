import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import styled, {keyframes} from 'styled-components'


const StyledApp = styled.div`

  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;

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
    <div className='App'>
      <h1 className="Header">Character Heights</h1>
    <StyledApp>
      {
        characters.map(char => {
          return <Character key={char.id} character={char} />
        })
      }
    </StyledApp>
    </div>
  );
}

export default App;
