import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { QuizInterface, QuestionInterface } from "../DataModels/QuizModel";

const initialState: QuizInterface = {
    id: null,
    name: '',
    questionList: []
}


const currentQuestionSlice = createSlice({
    name: 'currentQuestion-slice',
    initialState,
    reducers: {
        setQuiz: (state, action: PayloadAction<QuizInterface>) => {
            return action.payload
        },

        addQuestion: (state, action: PayloadAction<QuestionInterface>) => {
            // Append question to the question list
            state.questionList = {...state.questionList, ...action.payload}
            return state;
        },

        newQuestionList: (state, action: PayloadAction<Array<QuestionInterface>>) => {
            state.questionList = action.payload
            return state
        },

        setQuizName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },

        eraseQuestion: (state) => {
            return initialState
        }
    }
})



export const {setQuiz, addQuestion, newQuestionList, eraseQuestion, setQuizName} = currentQuestionSlice.actions
export default currentQuestionSlice.reducer
