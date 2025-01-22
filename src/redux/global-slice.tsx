import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import MultiChoiceInterface from '../DataModels/MultiChoiceModel'
import { ChoiceInterface } from '../DataModels/QuizModel'

const initialState:MultiChoiceInterface = {
        title: '',
        description: '',
        choices: [],
        multiple: false,
        required: false,
        imageFile: null,
        placement: false
   
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

        resetValues: () => {
            return initialState
        }
    }
})

export const { setValue, setChoice, resetValues } = globalSlice.actions
export default globalSlice.reducer