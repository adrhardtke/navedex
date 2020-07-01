import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'

// Components
import Button from '../../components/Button'

// Assets & Styles
import Logo from '../../assets/images/logo'
import { Container, Form, LoginBox, ButtonText } from './styles'

// services
import { login } from '../../services/auth'

function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const history = useHistory()

  
  useEffect(() => {
    setError(false)
}, [email, password])

  useEffect(()=> {
    const token = localStorage.getItem('TOKEN')
    if(token && token !== ''){
      history.push('/dashboard')
    }
  },[history])

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await login(email, password)
      if(response){
        localStorage.setItem('TOKEN', response.data.token)
        history.push('/dashboard')
      }
    } catch(e){
        setLoading(false)
        setError(true)
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
              {
                error && <p className="error">Ops! E-mail ou senha inválidos.</p>
              }
              <Button type="submit" width="100%">
                <ButtonText>
                    { 
                        loading ? (
                            <LoadingIcon size={24} color="#fff" />
                        ) : (
                            <span>Entrar</span>
                        )
                    }
                </ButtonText>
              </Button>
          </Form>
        </LoginBox>
      </Container>
    
  )
}

export default Login;