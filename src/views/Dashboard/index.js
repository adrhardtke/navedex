import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import Visualize from '../Visualize'
import Delete from '../Delete'
import moment from 'moment'
import 'moment/locale/pt-br'

// Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// Components
import Card from '../../components/Card'
import Button from '../../components/Button'

// Assets & Styles
import { Content, DeleteContainer, Header, NaversList, NaversContent } from './styles'

// Services
import { index, remove } from '../../services/navers'

function Dashboard() {
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [navers, setNavers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectNaver, setSelectNaver] = useState({})
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

  const handleDelete = (naver) => {
    setOpenDelete(true)
    setSelectNaver(naver)
  }

  const handleConfirmDelete = async () => {
    await remove(selectNaver.id)
    const deleteNaver = navers.find(naver => naver.id === selectNaver.id) 
    const newNavers = navers.filter(naver => naver.id !== deleteNaver.id)
    setNavers(newNavers)
    setConfirmDelete(true)
  }

  const closeDeleteModal = () => {
    setOpenDelete(false)
    setConfirmDelete(false)
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
                        naverId={naver.id}
                        onDelete={() =>handleDelete(naver)}
                        onOpen={() => handleOpen(naver)}
                      />
                    )
                  })
                }
              </NaversList>
            )
          }
        </NaversContent>

        {/* View Container */}
        <Modal open={selectNaver !== undefined && open} onClose={() => setOpen(false)} center classNames="modal">
          <div className="modal-content modal-no-margin modal-large">
            {selectNaver && <Visualize naver={selectNaver} />}
          </div>
        </Modal>

        {/* Delete Container */}
        <Modal open={openDelete} onClose={closeDeleteModal} center classNames="modal">
          <div className="modal-content">
            <DeleteContainer>
                { !confirmDelete ? (
                  <>
                    <h5>Excluir Naver</h5>
                    <p>Tem certeza que deseja excluir {selectNaver.name}?</p>
                    <div className="buttons">
                        <button type="button" onClick={() => setOpenDelete(false)}>Cancelar</button>
                        <button type="button" onClick={handleConfirmDelete}>Excluir</button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5>Naver excluído</h5>
                    <p>Naver excluído com sucesso!</p>
                  </>
                )}
            </DeleteContainer>
          </div>
        </Modal>
      </Content>
  )
}

export default Dashboard