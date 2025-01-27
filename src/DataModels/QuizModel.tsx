import { createQuizQuery, updateQuizQuery } from "../services/quizQuery"

interface QuizInterface {
    id?: number | null
    name?: string
    questionList: Array<any>
    userID?: null| number
    shareLink?: string
}

interface ChoiceInterface {
    answer: string
    selected?: boolean,
    state?: boolean
}

interface QuestionInterface {
    title: string
    description: string
    type: string
    choices: Array<ChoiceInterface>
    multiple: boolean
    required: boolean
}


class Quiz implements QuizInterface{
    id?: number
    name?: string
    userID?: number | null
    questionList: Array<QuestionInterface>
    shareLink: string = ''
    
    constructor({name, questionList}: QuizInterface){ 
        this.name = name
        this.questionList = questionList
    }
     

    static async createQuiz(data: any): Promise<any> {
        const response = await createQuizQuery(data)

        if(response.status === 201 && response.data.proceed) {
            return {quiz_id: response.data.quiz_id, message: response.data.message, values: response.data.quiz_data}
        }

        return false;
    }


    static async updateQuiz(data: any): Promise<any> {
        const response = await updateQuizQuery(data)

        if(response.status === 200 && response.data.proceed) {
            return {quiz_id: data.id, message: response.data.message}
        }
    }
}


export default Quiz
export {type QuizInterface, type QuestionInterface, type ChoiceInterface}