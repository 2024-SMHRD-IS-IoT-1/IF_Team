import axios from 'axios'
// axios 설정 
const instance = axios.create({
    baseURL : 'http://192.168.219.49:5000'
})
export default instance;