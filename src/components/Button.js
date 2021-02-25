import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? '#9ad5bf' : '#a6e0cb')};
  color: ${props => (props.isActive ? '#5b5b5b' : 'white')};
  width: 75%;
  display: grid;
  place-content: center;
  text-decoration: none;
  border: none;
  border-radius: 44px;
  box-shadow: 12px 12px 25px #86b5a4, -7px -10px 13px #c6fff2;
  &.active {
    color: white;
  }
`
