import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import globalSlice from './global-slice'
import questionListSlice from './question'
import currentQuestionSlice from './currentQuestion-slice'

import userSlice from './user-slice'
import loadingSlice from './loading-slice'

const persitConfig = {
    key: 'root',
    storage
}


const rootReducer = combineReducers({
    user: userSlice,
    loading: loadingSlice,
    global: globalSlice,
    questionList: questionListSlice,
    currentQuestion: currentQuestionSlice
})


const persistedReducer = persistReducer(persitConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
        },
    })
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store