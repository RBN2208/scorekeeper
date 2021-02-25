import React from 'react'
import styled from 'styled-components/macro'
import GameForm from './GameForm'

export default function PageCreate({ onCreateGame }) {
  return (
    <>
      <MainHeading>Personal Scoreboard</MainHeading>
      <PlayContainer>
        <GameForm onCreateGame={onCreateGame} />
      </PlayContainer>
    </>
  )
}

const PlayContainer = styled.section`
  display: grid;
  gap: 50px;
  grid-auto-rows: max-content;
  height: 100%;
  overflow-y: scroll;
  padding: 25px;
`

const MainHeading = styled.div`
  display: grid;
  place-content: center;
  color: #555454;
  box-shadow: 12px 12px 25px #86b5a4, -7px -10px 13px #c6fff2;
`
