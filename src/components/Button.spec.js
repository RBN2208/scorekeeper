import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('changes bgColor and color when active', () => {
    const { rerender, container } = render(<Button>Hello World</Button>)
    const defaultColor = getComputedStyle(container.firstChild).backgroundColor
    rerender(<Button isActive>Hello World</Button>)
    const newColor = getComputedStyle(container.firstChild).backgroundColor
    expect(defaultColor).not.toBe(newColor)
  })
})

// hier musste ich spicken, meine Lösung war ohne rerender und container
/* 

  it('changes bgColor and color when active', () => {
    const button = render(<Button>Hello World</Button>)
    const defaultColor = getComputedStyle(button).backgroundColor
    render(<Button isActive>Hello World</Button>)
    const newColor = getComputedStyle(button).backgroundColor
    expect(defaultColor).not.toBe(newColor)
  })

*/
