import { render, screen } from '@testing-library/react'
import GameForm from './GameForm'

describe('GameForm', () => {
  it('render a form with two inputs', () => {
    render(<GameForm />)
    expect(screen.getByLabelText('Name of game')).toBeInTheDocument()
    expect(screen.getByLabelText('Player names')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
