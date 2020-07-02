import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'

// Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// Components
import Card from '../../components/Card'
import Button from '../../components/Button'

// Assets & Styles
import { Content, DeleteContainer, Header, Image, NaversList, NaversContent, ViewContainer } from './styles'

// Icons
import { FaTrash } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

// Services
import { index, remove } from '../../services/navers'

function Dashboard() {
  const [openView, setOpenView] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [navers, setNavers] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [selectNaver, setSelectNaver] = useState({})
  const history = useHistory()
  
  useEffect( ()=> {
    moment.locale('pt-br') 
    async function requestApi(){
      const response = await index()
      setNavers(response.data.reverse())
      setLoading(false)
    }
    requestApi()
  },[])

  useEffect(()=> {
    navers.forEach(async naver => naver.birthdate= await moment(naver.birthdate, "YYYY-MM-DD").format("LL"))
    navers.forEach(async naver => naver.admission_date= await moment(naver.admission_date, "YYYY-MM-DD").format("LL"))

  },[navers])


  const handleOpen = (naver) => {
    setOpenView(true)
    setSelectNaver(naver)
  }

  const handleDelete = (naver) => {
    setOpenView(false)
    setOpenDelete(true)
    setSelectNaver(naver)
  }

  const handleConfirmDelete = async () => {
    setLoadingDelete(true)
    await remove(selectNaver.id)
    const deleteNaver = navers.find(naver => naver.id === selectNaver.id) 
    const newNavers = navers.filter(naver => naver.id !== deleteNaver.id)
    setNavers(newNavers)
    setConfirmDelete(true)
    setLoadingDelete(false)
  }

  const closeDeleteModal = () => {
    setConfirmDelete(false)
    setOpenDelete(false)
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
        <Modal open={openView} onClose={() => setOpenView(false)} center classNames="modal">
          <div className="modal-content modal-no-margin modal-large">
            <ViewContainer>
              <Image src={selectNaver.url} />
              <div className="data">
                  <h4>{selectNaver.name}</h4>
                  <p>{selectNaver.job_role}</p>
                  <h5>Idade</h5>
                  <p>{selectNaver.birthdate}</p>
                  <h5>Tempo de empresa</h5>
                  <p>{selectNaver.admission_date}</p>
                  <h5>Projetos que participou</h5>
                  <p>{selectNaver.project}</p>

                  <div className="buttons">
                      <Link to={`/edit/${selectNaver.id}`}>
                          <MdModeEdit size={24} color="#212121" />
                      </Link>

                      <button type="button">
                          <FaTrash size={24} onClick={() => handleDelete(selectNaver)} color="#212121" />
                      </button>
                  </div>
              </div>
              
            </ViewContainer>
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
                        <button type="button" onClick={handleConfirmDelete}>
                            { 
                                loadingDelete ? (
                                    <LoadingIcon color="#fff" />
                                ) : (
                                    <span>Excluir</span>
                                )
                            }
                        </button>
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