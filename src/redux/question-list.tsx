import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = []

const questionListSlice = createSlice({
    name: 'question-list',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<any>) => {
            return action.payload
        }
    }
})