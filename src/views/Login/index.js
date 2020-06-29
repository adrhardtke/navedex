import React from 'react';
import Logo from '../../assets/images/Logo'
import { Container, Form, SubtmitButton } from './styles'

function Login() {
  return (
      <Container>
          <Logo />
          <Form>
              <div className="input-container">
                <label for="">E-mail</label>
                <input type="email" />
              </div>
              <div className="input-container">
                <label for="">Senha</label>
                <input type="password" />
              </div>
              <SubtmitButton>
                  Entrar
              </SubtmitButton>
          </Form>
      </Container>
    
  )
}

export default Login;