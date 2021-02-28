import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('render the game data', () => {
    render(
      <HistoryEntry
        nameOfGame="Mario"
        players={[
          { name: 'John', score: 1 },
          { name: 'Jane', score: 2 },
        ]}
      />
    )
    expect(screen.getByText('John')).toBeVisible()
    expect(screen.getByText('Jane')).toBeVisible()
    expect(screen.getByText('Mario')).toBeVisible()
  })
})
