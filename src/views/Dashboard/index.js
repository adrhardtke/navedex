import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

// Components
import Card from '../../components/Card'
import Button from '../../components/Button'

// Assets & Styles
import { Content, Header, NaversList, NaversContent } from './styles'

// Services
import { index } from '../../services/navers'

function Dashboard() {
  const [navers, setNavers] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect( ()=> {
    async function requestApi(){
      const response = await index()
      setNavers(response.data)
      setLoading(false)
    }
    requestApi()
  })

  return (
      <Content>
        <Header>
          <h1>Navers</h1>
          <Button type="button" onClick={() => history.push('/create')}>Adicionar Naver</Button>
        </Header>
        <NaversContent>
          {
            navers.length === 0 ? (
              <div className="notification">
                {
                  loading ? <LoadingIcon color="#212121" size={24}  /> : <p>Ops! Nenhum Naver cadastrado :(</p>
                }     
              </div>
            ) : (
              <NaversList>
                {
                  navers.map( naver => {
                    return (
                      <Card
                        imageUrl={naver.url}
                        name={naver.name}
                        skill={naver.job_role}
                      />
                    )
                  }
                  )
                }
              </NaversList>
            )
          }
        </NaversContent>
      </Content>
  )
}

export default Dashboard