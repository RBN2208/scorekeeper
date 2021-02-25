import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <Button as={NavLink} exact to="/">
        Play
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  padding: 20px;
`
/* Without react router 

<Button
        isActive={currentPage === 'create'}
        onClick={() => onNavigate('create')}
      >
        Play
      </Button>
      <Button
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </Button>

*/
