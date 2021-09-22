import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './questions';
import gameReducer from './game';
import thunk from 'redux-thunk';

export default configureStore({
    reducer: {
        questions: questionsReducer,
        game: gameReducer,
    },
    middleware: [thunk],
})