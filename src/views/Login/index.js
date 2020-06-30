import React from 'react';
import Logo from '../../assets/images/logo'
import { Container, Form, LoginBox, SubtmitButton } from './styles'

function Login() {
  return (
      <Container>
        <LoginBox>
          <Logo />
          <Form>
              <div className="input-container">
                <label for="">E-mail</label>
                <input type="email" placeholder="example@email.com" />
              </div>
              <div className="input-container">
                <label for="">Senha</label>
                <input type="password" placeholder="******" />
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