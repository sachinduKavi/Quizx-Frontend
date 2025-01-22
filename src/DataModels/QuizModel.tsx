import { createQuizQuery } from "../services/quizQuery"

interface QuizInterface {
    id?: number | null
    name?: string
    questionList: Array<any>
    userID?: null| number
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
    
    constructor({name, questionList}: QuizInterface){ 
        this.name = name
        this.questionList = questionList
    }
     

    static async createQuiz(data: any): Promise<boolean | number> {
        const response = await createQuizQuery(data)

        if(response.status === 201 && response.data.proceed) {
            return response.data.quiz_id
        }

        return false;
    }
}


export default Quiz
export {type QuizInterface, type QuestionInterface, type ChoiceInterface}