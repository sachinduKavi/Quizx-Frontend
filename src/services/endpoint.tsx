import axios from "axios";
import toast from "react-hot-toast";


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

// Error handling 
domain.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if(error.response) {
            // Unauthorize access
            if(error.response.status === 400) {
                toast.error(error.response.data.message) // toasting the unauthorized access message
                return error.response
            }
        }
    }
)

export {
    domain,
    header
}