import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('shows an input with given values', () => {
    render(
      <Input labelText="input" name="John" placeholder="your name" type="text">
        Hello World
      </Input>
    )
    const input = screen.getByLabelText('input')

    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'your name')
    expect(input).toHaveAttribute('name', 'John')
  })
})
