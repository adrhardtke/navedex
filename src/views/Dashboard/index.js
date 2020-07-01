import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import Visualize from '../Visualize'
import moment from 'moment'
import 'moment/locale/pt-br'

// Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// Components
import Card from '../../components/Card'
import Button from '../../components/Button'

// Assets & Styles
import { Content, Header, NaversList, NaversContent } from './styles'

// Services
import { index } from '../../services/navers'

function Dashboard() {
  const [open, setOpen] = useState(false)
  const [navers, setNavers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectNaver, setSelectNaver] = useState()
  const history = useHistory()

  useEffect( ()=> {
    moment.locale('pt-br') 
    async function requestApi(){
      const response = await index()
      setNavers(response.data)
      setLoading(false)
    }
    requestApi()
  },[])

  useEffect(()=> {
    navers.forEach(async naver => naver.birthdate= await moment(naver.birthdate, "YYYY-MM-DD").format("LL"))
    navers.forEach(async naver => naver.admission_date= await moment(naver.admission_date, "YYYY-MM-DD").format("LL"))

  },[navers])

  const handleOpen = (naver) => {
    setOpen(true)
    setSelectNaver(naver)
  }

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
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onOpen={() => handleOpen(naver)}
                      />
                    )
                  })
                }
              </NaversList>
            )
          }
        </NaversContent>
        <Modal open={selectNaver !== undefined && open} onClose={() => setOpen(false)} center classNames="modal">
          <div className="modal-content modal-no-margin modal-large">
            {selectNaver && <Visualize naver={selectNaver} />}
          </div>
        </Modal>
      </Content>
  )
}

export default Dashboard