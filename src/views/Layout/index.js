import React from 'react'
import Nav from '../../components/Nav'
import Container from '../../components/Container'

function Layout({children}) {
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