import { createQuizQuery } from "../services/quizQuery"

interface QuizInterface {
    id?: number
    name: string
    questionList: Array<any>

}


class Quiz implements QuizInterface{
    id?: number
    name: string
    userID?: number
    questionList: Array<any>
    
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
export {type QuizInterface}