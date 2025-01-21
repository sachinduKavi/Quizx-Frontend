import { domain, header } from "./endpoint";


const createQuizQuery = async (data: any) => {
    return await domain.post('quiz/createQuiz/', data, header)
}


export {
    createQuizQuery
}