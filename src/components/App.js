import { useState } from 'react'
import styled from 'styled-components/macro'
import PageGame from './PageGame'
import PageCreate from './PageCreate'
import PageHistory from './PageHistory'
import Navigation from './Navigation'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Route, useHistory } from 'react-router-dom'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <PageCreate onCreateGame={createGame} />
          </Route>
          <Route path="/game">
            <PageGame
              players={players}
              nameOfGame={nameOfGame}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onReset={resetScores}
              onEnd={endGame}
            />
            <BlankNavigation />
          </Route>
          <Route path="/history">
            <PageHistory history={history} setHistory={setHistory} />
          </Route>
        </Switch>
        <Route exact path={['/', '/history']}>
          <Navigation />
        </Route>
      </AppLayout>
    </>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    push('/history')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }
}

const AppLayout = styled.div`
  display: grid;
  grid-auto-rows: 50px auto 80px;
  gap: 20px;
  height: 100vh;
  background-color: #a6e0cb;
`
const BlankNavigation = styled.nav`
  visibility: hidden;
`

/*  Old navigation

  const [currentPage, setCurrentPage] = useState('create')

  
        {currentPage === 'create' && <PageCreate onCreateGame={createGame} />}

        {currentPage === 'game' && (
          <PageGame
            players={players}
            nameOfGame={nameOfGame}
            onPlus={handlePlus}
            onMinus={handleMinus}
            onReset={resetScores}
            onEnd={endGame}
          />
        )}
        {currentPage === 'game' && <BlankNavigation />}

        {currentPage === 'history' && (
          <PageHistory history={history} setHistory={setHistory} />
        )}

        {(currentPage === 'create' || currentPage === 'history') && (
          <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        )}
*/
