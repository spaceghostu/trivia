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
        setCategory: (state, action) => update(state, {
            category: { $set: action.payload }
        })
    },
})

export const { incrementScore, setCategory } = gameSlice.actions

export default gameSlice.reducer