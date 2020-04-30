import axios from 'axios'

const apiGlobal = axios.create({
    baseURL: 'https://covidapi.info/api/v1/global'
})

export default apiGlobal