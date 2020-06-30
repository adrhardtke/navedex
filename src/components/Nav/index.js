import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets & Styles
import Logo from '../../assets/images/logo'
import { Navbar } from './styles'

function Nav() {
    const history = useHistory();

    const logout = () => {
      localStorage.removeItem('TOKEN')
      history.push('/')
    }

  return (
      <Navbar>
        <Logo />
        <button type="button" onClick={logout}>Sair</button>
      </Navbar>
  )
}

export default Nav