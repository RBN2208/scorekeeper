import React from 'react'
import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <History>
      <Gamename>{nameOfGame}</Gamename>
      {players.map((player, index) => (
        <HistoryPlayer key={index} className="HistoryEntry__player">
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryPlayer>
      ))}
    </History>
  )
}

const History = styled.section`
  display: grid;
  gap: 10px;
  width: 70%;
`

const Gamename = styled.span`
  font-weight: bold;
`
const HistoryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
`
