import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuestions = createAsyncThunk(
    'questions/fetch',
    async (category) => {
        const response = await fetch(
            `https://api.trivia.willfry.co.uk/questions?limit=10&categories=${category}`
        );
        return response.json()
    }
)

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        loading: 'idle',
        error: null,
        currentRequestId: undefined,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.questions = action.payload
                    state.currentRequestId = undefined
                }
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.error = action.error
                    state.currentRequestId = undefined
                }
            })
    },
})

export default questionsSlice.reducer