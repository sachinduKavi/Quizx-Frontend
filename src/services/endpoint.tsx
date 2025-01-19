import axios from "axios";


const localDomain = axios.create({
    baseURL:'http://127.0.0.1:8000/api',
    withCredentials: true
})

const header = {
    headers: {
        'Content-Type': 'application/json',
        }
}


const domain = localDomain

export {
    domain,
    header
}