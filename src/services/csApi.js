import axios from 'axios';

const csApi = axios.create({
    baseURL: 'http://127.0.0.1:3333/api/v1/',
    headers:{
        'content-type':'application/json;charset=utf-8',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTYwMTA2MzQ0NH0.FF3Q4GGvBGKLJP1GB1_eoQkxWN2gKA8RVepqO7JMRyY'
    }
})

export default csApi;