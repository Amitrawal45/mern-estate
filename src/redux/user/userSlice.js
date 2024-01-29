import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading:null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state) => {
            state.loading = false
        },
        signInFailure: (state) => {
            state.loading = false
        },
    },
});

export const{signInFailure, signInSuccess,signInStart}=userSlice.actions;

export default userSlice.reducer;
