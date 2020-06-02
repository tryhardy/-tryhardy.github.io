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
});

$axios.interceptors.response.use(
    response => response,
    async error => {

        const originalRequest =  error.config

        if(error.response.status === 401) {
            const { data } = await $axios.post('/refreshToken');
            const token = data.token;

            localStorage.setItem('token', token);
            originalRequest.defaults.headers['Authorization'] = `Bearer ${token}`;

            return axios(originalRequest);
        }

        return Promise.reject(error)
    }
);

export default $axios;