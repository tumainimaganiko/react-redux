import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    try {
        const fetch = fetch('https://randomuser.me/api/?results=5');
        const response = await fetch.json();
        return response;
    } catch (error) {
        return error;
    }
})

 export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        displayUser: () => {}
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })
    }
})

export const { displayUser } = usersSlice.actions;

export default usersSlice.reducer;