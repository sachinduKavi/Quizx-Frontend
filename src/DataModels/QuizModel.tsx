
interface QuizInterface {
    id?: number
    name: string
    questionList: Array<any>

}


class Quiz implements QuizInterface{
    id?: number
    name: string
    questionList: Array<any>

    constructor({name, questionList}: QuizInterface){ 
        this.name = name
        this.questionList = questionList
    }
}


export default Quiz
export {type QuizInterface}