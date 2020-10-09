import React from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledCharacter = styled.div`

    opacity: 0;
    animation: ${kf} .5s ease-in-out forwards;
    color: white;
    // background: white;
    background-image: url("https://cdn.mos.cms.futurecdn.net/rXQiLcfc89vp3EbYQ58ERH-1200-80.jpeg");
    width: 23%;
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

