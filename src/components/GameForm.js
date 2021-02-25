import React from 'react'
import Button from './Button'
import Input from './Input'
import styled from 'styled-components'

export default function GameForm({ onCreateGame }) {
  return (
    <Gameform onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player names"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <ButtonForm>Create game</ButtonForm>
    </Gameform>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements
    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}

const Gameform = styled.form`
  display: grid;
  gap: 60px;
`
const ButtonForm = styled(Button)`
  margin: 0 auto;
  &:active {
    color: #373737;
  }
`
