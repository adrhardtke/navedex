import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'

// Components
import Rollback from '../../components/Rollback'
import InputWithLabel from '../../components/InputWithLabel'
import Button from '../../components/Button'

// Assets & Styles
import { ButtonText, Content, Form } from './styles';

// Service
import { create } from '../../services/navers'

function Create() {
    const [ loading, setLoading ] = useState(false)
    
    const [ name, setName ] = useState('')
    const [ job_role, setJob_role ] = useState('')
    const [ admission_date, setAdmission_date ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ project, setProject ] = useState('')
    const [ url, setUrl ] = useState('')

    const history = useHistory()

    const reverseDate = date => {
        const reverse = date.split('-').reverse().join('/')
        return reverse
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        const naver = {
            job_role,
            admission_date: reverseDate(admission_date),
            birthdate: reverseDate(birthdate),
            project,
            name,
            url,
        }

        const response = await create(naver)

        if(response){
            history.push('/dashboard')
        }
    }

  return (
      <Content>
            <Rollback title="Adicionar Naver" onClick={() => history.push('/dashboard')} />
            
            <Form onSubmit={handleSubmit}>
                <div className="grid">
                    <InputWithLabel
                        type="text"
                        label="Nome"
                        placeholder="Nome"
                        id={'nome'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        width={'100%'}
                    />

                    <InputWithLabel
                        type="text"
                        label="Cargo"
                        placeholder="Cargo"
                        id={'cargo'}
                        value={job_role}
                        onChange={(e) => setJob_role(e.target.value)}
                        width={'100%'}
                    />

                    <InputWithLabel
                        type="date"
                        label="Idade"
                        placeholder="Idade"
                        id={'idade'}
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        width={'100%'}
                    />

                    <InputWithLabel
                        type="date"
                        label="Tempo de Empresa"
                        placeholder="Tempo de Empresa"
                        id={'temp_emp'}
                        value={admission_date}
                        onChange={(e) => setAdmission_date(e.target.value)}
                        width={'100%'}
                    />

                    <InputWithLabel
                        type="text"
                        label="Projetos que participou"
                        placeholder="Projetos que participou"
                        id={'projetos'}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        width={'100%'}
                    />

                    <InputWithLabel
                        type="text"
                        label="URL da foto do Naver"
                        placeholder="URL da foto do Naver"
                        id={'image'}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        width={'100%'}
                    />                
                </div>

                <Button type="submit" width={'180px'}>
                    <ButtonText>
                        { 
                            loading ? (
                                <LoadingIcon size={24} color="#fff" />
                            ) : (
                                <span>Salvar</span>
                            )
                        }
                    </ButtonText>
                </Button>
            </Form>
      </Content>
  )
}

export default Create;