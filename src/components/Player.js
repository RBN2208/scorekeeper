import styled from 'styled-components/macro'
import Button from './Button'

const MAX_HUE_VALUE = 120 // 120 is green
const MIN_HUE_VALUE = 0 // 0 is red

export default function Player({ name, score, onMinus, onPlus }) {
  const maxHue = Math.min(score * 10, MAX_HUE_VALUE)
  const hue = Math.max(maxHue, MIN_HUE_VALUE)
  const color = score === 0 ? 'black' : `hsl(${hue}, 50%, 50%)`
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore color={color}>
        <ButtonStyled onClick={onMinus}>-</ButtonStyled>
        <span>{score}</span>
        <ButtonStyled onClick={onPlus}>+</ButtonStyled>
      </PlayerScore>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const PlayerScore = styled.div`
  color: ${props => props.color || 'black'};
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  span {
    filter: drop-shadow(0 0 2px white);
  }
`

const ButtonStyled = styled(Button)`
  width: 32px;
  height: 32px;
  color: #373737;
`
