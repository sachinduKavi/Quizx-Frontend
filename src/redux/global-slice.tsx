import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import MultiChoiceInterface from '../DataModels/MultiChoiceModel'
import { ChoiceInterface } from '../DataModels/QuizModel'
import { QuestionInterface } from '../DataModels/QuizModel'

const initialState:QuestionInterface = {
        title: '',
        type: '',
        description: '',
        choices: [],
        multiple: false,
        required: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setValue: (state, action) => {
            return {...state, ...action.payload};
        },

        setChoice: (state, action: PayloadAction<{ index: number; choice: ChoiceInterface }>) => {
            const {index, choice} = action.payload
            state.choices[index] = { ...choice, selected: choice.selected ?? false }
        },

        setQuestion: (state, action: PayloadAction<QuestionInterface>) => {
            return action.payload
        },


        changeSelection: (state, action: PayloadAction<boolean>) => {
            
        },

        resetValues: () => {
            return initialState
        }
    }
})

export const { setValue, setChoice, resetValues, setQuestion } = globalSlice.actions
export default globalSlice.reducer