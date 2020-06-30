import React from 'react'
import Nav from '../../components/Nav'
import Container from '../../components/Container'

import { useHistory } from 'react-router-dom'

function Layout({children}) {
    const history = useHistory()

    React.useEffect( () => {
        const TOKEN = localStorage.getItem('TOKEN')

        if(!TOKEN){
            history.push('/')
        }

    },[history])

  return (
      <Container>
          <Nav />
          <main>
              { children }
          </main>
      </Container>
  )
}

export default Layout