import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../models/User";

const initialState: UserInterface = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserInterface>) => {
            return action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
