import { createQuizQuery } from "../services/quizQuery"

interface QuizInterface {
    id?: number | null
    name?: string
    questionList: Array<any>

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
    userID?: number
    questionList: Array<QuestionInterface>

    
    constructor({name, questionList}: QuizInterface){ 
        this.name = name
        this.questionList = questionList
    }


    static async createQuiz(data: any): Promise<boolean> {
        const response = await createQuizQuery(data)
        return response.status === 201 && response.data.proceed
    }
}


export default Quiz
export {type QuizInterface, type QuestionInterface}