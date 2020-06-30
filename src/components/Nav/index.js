import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets & Styles
import Logo from '../../assets/images/logo'
import { Navbar } from './styles'

function Nav() {
    const history = useHistory();

  return (
      <Navbar>
        <Logo />
        <button type="button">Sair</button>
      </Navbar>
  )
}

export default Nav