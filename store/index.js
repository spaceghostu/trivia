import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './questions';
import thunk from 'redux-thunk';

export default configureStore({
    reducer: {
        questions: questionsReducer,
    },
    middleware: [thunk],
})