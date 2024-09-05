import axios from 'axios'
// axios 설정 
const instance = axios.create({
    baseURL : 'http://localhost:5000'
})
export default instance;