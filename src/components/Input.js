import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <Inputfield name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
  color: #373737;
`

const Inputfield = styled.input`
  color: #373737;
  outline: none;
  padding: 4px 4px 4px 15px;
  border: none;
  border-radius: 44px;
  background: #a6e0cb;
  box-shadow: inset 5px 5px 9px #86b5a4, inset -2px -9px 12px #c6fff2;
`
