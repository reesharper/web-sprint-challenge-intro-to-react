import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledCharacter = styled.div`

    color: black;
    background: white;
    width: 15%;
    margin: 3% auto;
    border-radius: 50px;
    padding: 20px;

`

export default function Character(props) {
const {character} = props;
const {name, height} = character;


return (
    <>
    <StyledCharacter>
        <h2> {name}</h2>
        <h4> {height} cm </h4>
    </StyledCharacter>
    </>
)

}

