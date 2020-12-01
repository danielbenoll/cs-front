import axios from 'axios';
import { getToken } from './auth';

const csApi = axios.create({
    baseURL: 'http://127.0.0.1:3333/api/v1/',
    headers:{
        'content-type':'application/json;charset=utf-8',
    }
})

csApi.interceptors.request.use(async config =>{
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
        // console.log(config.headers.Authorization = `Bearer ${token}`)
    }

    return config
})

export default csApi;