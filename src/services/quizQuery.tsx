import { domain, header } from "./endpoint";


const createQuizQuery = async (data: any) => {
    return await domain.post('quiz/createQuiz/', data, header)
}


const updateQuizQuery = async (data: any) => {
    return await domain.post('quiz/updateQuiz/', data, header)
}

const fetchQuizzesQuery = async () => {
    return await domain.get('quiz/getQuizzes/')
}


export {
    createQuizQuery,
    updateQuizQuery,
    fetchQuizzesQuery
}