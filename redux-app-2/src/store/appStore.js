
import { configureStore } from "@reduxjs/toolkit";
import { usersReducers} from '../reducers/usersReducers'
import { photosReducer } from "../reducers/photosReducer";
import { postsReducers} from '../reducers/postsReducer'
import {logger} from 'redux-logger'

export const appStore = configureStore({
   reducer:{usersReducers,postsReducers,photosReducer},
   middleware:[logger],
})