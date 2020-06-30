import api from './api'

const barearToken = () => {
    const userToken = localStorage.getItem('TOKEN')
    return ({
        headers: { Authorization: `Bearer ${userToken}` },
    })
}

export const index = async () => {
    const response = await api.get('/navers', barearToken())
    return response
}

export const create = async (naver) => {
    const response = await api.post('/navers', naver, barearToken())
    return response
}