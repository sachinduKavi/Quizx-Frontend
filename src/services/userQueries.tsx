import { domain, header } from "./endpoint";

const registerUserQuery = async (data: any) => {
    return await domain.post('users/', data, header)
}

const authorizeUserQuery = async (data: any) => {
    return await domain.post('users/authorize/', data, header)
}


export {
    registerUserQuery,
    authorizeUserQuery
}