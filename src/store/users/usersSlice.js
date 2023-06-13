import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    isLoading: false,
    error
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {}
})

export const { extraReducers } = usersSlice.actions;

export default usersSlice.reducer;