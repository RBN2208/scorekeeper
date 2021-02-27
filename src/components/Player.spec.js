import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Player from './Player'

describe('Player', () => {
  it('has two buttons', () => {
    render(<Player />)
    expect(screen.getAllByRole('button', /[+-]/)).toHaveLength(2)
  })
  it('can use buttons with plus and minus', () => {
    const callBackMinus = jest.fn()
    const callBackPlus = jest.fn()
    render(<Player onMinus={callBackMinus} onPlus={callBackPlus} />)
    userEvent.click(screen.getByRole('button', { name: '+' }))
    userEvent.click(screen.getByRole('button', { name: '-' }))
    expect(callBackPlus).toHaveBeenCalledTimes(1)
    expect(callBackMinus).toHaveBeenCalledTimes(1)
  })
  it('changes color on click', () => {
    const { rerender } = render(<Player name="John" score={0} />)
    expect(screen.getByText('0')).toMatchSnapshot()
    rerender(<Player name="John" score={10} />)
    expect(screen.getByText('10')).toMatchSnapshot()
    rerender(<Player name="John" score={-10} />)
    expect(screen.getByText('-10')).toMatchSnapshot()
  })
})
