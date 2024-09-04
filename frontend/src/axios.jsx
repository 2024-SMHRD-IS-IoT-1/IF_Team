import axios from 'axios'
// axios 설정 
const instance = axios.create({
    baseURL : 'http://localhost:5050'
})
export default instance;