import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

// Assets & Styles
import Logo from '../../assets/images/logo'
import { Container, Form, LoginBox, SubtmitButton } from './styles'

// services
import { login } from '../../services/auth'

function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const history = useHistory()

  useEffect(()=> {
    const token = localStorage.getItem('TOKEN')
    if(token && token !== ''){
      history.push('/dashboard')
    }
  },[history])

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await login(email, password)

    if(response){
      localStorage.setItem('TOKEN', response.data.token)
    }
  }

  return (
      <Container>
        <LoginBox>
          <Logo />
          <Form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*******" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <SubtmitButton>
                  Entrar
              </SubtmitButton>
          </Form>
        </LoginBox>
      </Container>
    
  )
}

export default Login;