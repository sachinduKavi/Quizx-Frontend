import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import MultiChoiceInterface from '../DataModels/MultiChoiceModel'


interface Choice {
    answer: string
    selected: boolean
}

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

        setChoice: (state, action: PayloadAction<{ index: number; choice: Choice }>) => {
            const {index, choice} = action.payload
            state.choices[index] = choice
        },

        resetValues: () => {
            return initialState
        }
    }
})

export const { setValue, setChoice, resetValues } = globalSlice.actions
export default globalSlice.reducer