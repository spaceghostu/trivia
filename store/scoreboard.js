import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';

export const scoreboardSlice = createSlice({
    name: 'scoreboard',
    initialState: [],
    reducers: {
        saveScore: (state, action) => update(state, { $push: [action.payload] }),
    },
})

export const { saveScore } = scoreboardSlice.actions


const sortByDate = (a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
}

export const selectSortedScoreboard = state => [...state.scoreboard].sort(sortByDate)

export default scoreboardSlice.reducer