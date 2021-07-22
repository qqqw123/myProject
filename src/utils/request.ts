import Axios from 'axios'
import { ElMessage } from 'element-plus'

const axios = Axios.create({
    baseURL: "",
    timeout: 20000
})

axios.interceptors.request.use(response => {
    return response
}, error => {
    return Promise.reject(error);
})
