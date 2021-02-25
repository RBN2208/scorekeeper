import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import Button from './Button'

export default function PageHistory({ history, setHistory }) {
  return (
    <>
      <HeaderBlank>Last Games</HeaderBlank>
      <HistoryContainer>
        {history.map(({ players, nameOfGame, id }) => (
          <HistoryEntry id={id} nameOfGame={nameOfGame} players={players} />
        ))}
        <ButtonStyled onClick={() => setHistory([])}>
          Delete History
        </ButtonStyled>
      </HistoryContainer>
    </>
  )
}

const HistoryContainer = styled.section`
  height: 100%;
  overflow-y: scroll;
  padding: 25px;
  display: grid;
  gap: 40px;
  justify-items: center;
  grid-auto-rows: min-content;
`
const ButtonStyled = styled(Button)`
  &:active {
    color: #373737;
  }
`
const HeaderBlank = styled(Header)`
  display: grid;
  place-content: center;
  color: #555454;
  box-shadow: 12px 12px 25px #86b5a4, -7px -10px 13px #c6fff2;
`
