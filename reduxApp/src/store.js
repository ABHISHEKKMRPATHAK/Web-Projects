import {configureStore} from '@reduxjs/toolkit'
import { appReducer } from './reducer'

export const appStore = configureStore({
    reducer: {appReducer}
})