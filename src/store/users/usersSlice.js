import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        {
            id:1,
            firstName: 'Tumaini',
            lastName: 'Maganiko'
        },
        {
            id:2,
            firstName: 'Ebenezer',
            lastName: 'Barnabas'
        },
        {
            id:3,
            firstName: 'Oyedepo',
            lastName: 'Maganiko'
        },
    ],
    isLoading: false,
    error: undefined
}

 export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        displayUser: () => {}
    },
    extraReducers: {}
})

export const { displayUser } = usersSlice.actions;

export default usersSlice.reducer;