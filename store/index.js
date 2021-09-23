import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import questionsReducer from './questions';
import scoreboardReducer from './scoreboard';
import gameReducer from './game';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['scoreboard']
};

const reducers = combineReducers({
    questions: questionsReducer,
    game: gameReducer,
    scoreboard: scoreboardReducer,
})

const persistReducers = persistReducer(persistConfig, reducers);


export default configureStore({
    reducer: persistReducers,
    middleware: [thunk],
})
