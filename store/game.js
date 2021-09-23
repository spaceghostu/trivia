import { createSlice } from '@reduxjs/toolkit'
import update from 'immutability-helper';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        score: 0,
        category: null,
    },
    reducers: {
        incrementScore: (state) => update(state, {
            score: { $apply: (val) => val + 1 }
        }),
        resetScore: (state) => update(state, {
            score: { $set: 0 }
        }),
        setCategory: (state, action) => update(state, {
            category: { $set: action.payload }
        })
    },
})

export const { incrementScore, setCategory, resetScore } = gameSlice.actions

export default gameSlice.reducer