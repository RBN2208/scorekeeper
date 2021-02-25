import React from 'react'
import styled from 'styled-components/macro'
import Player from './Player'
import Button from './Button'
import Header from './Header'

export default function PageGame({
  players,
  nameOfGame,
  onMinus,
  onPlus,
  onEnd,
  onReset,
}) {
  return (
    <>
      <HeaderGame>{nameOfGame}</HeaderGame>
      <GameContainer>
        {players.map(({ name, score }, index) => (
          <Player
            key={name}
            name={name}
            score={score}
            onPlus={() => onPlus(index)}
            onMinus={() => onMinus(index)}
          />
        ))}
        <ButtonGrid>
          <Button onClick={onReset}>Reset scores</Button>
          <Button onClick={onEnd}>End game</Button>
        </ButtonGrid>
      </GameContainer>
    </>
  )
}

const ButtonGrid = styled.div`
  display: flex;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  color: #373737;
`

const GameContainer = styled.section`
  height: 100%;
  overflow-y: scroll;
  padding: 30px;
  display: grid;
  grid-auto-rows: max-content;
  gap: 30px;
`
const HeaderGame = styled(Header)`
  padding: 0;
  padding-top: 30px;
  font-weight: bold;
`
