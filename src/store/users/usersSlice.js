import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    isLoading: false,
    error: undefined
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    try {
        return fetch('https://randomuser.me/api/?results=5')
        .then(resp => resp.json());
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
            state.users = action.payload.results;
            console.log(action.payload.results)
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })
    }
})

export const { displayUser } = usersSlice.actions;

export default usersSlice.reducer;