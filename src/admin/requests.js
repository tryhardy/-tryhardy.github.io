import axios from "axios";
const token = localStorage.getItem('token');

if(!token) {
    console.warn("Токен отсутствует")
}

const $axios = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export default $axios;