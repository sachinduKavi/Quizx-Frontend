import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Array<any> = []

const questionListSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setQuestionList: (state, action: PayloadAction<Array<any>>) => {
            return action.payload
        }
    }
})


export const {setQuestionList} = questionListSlice.actions
export default questionListSlice.reducer