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

const getQuizQuery = async (quizID: number) => {
    return await domain.get(`quiz/getQuiz/?quiz_id=${quizID}`)
}


export {
    createQuizQuery,
    updateQuizQuery,
    fetchQuizzesQuery,
    getQuizQuery
}