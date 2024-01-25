import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
};

const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers: {    
        createUser(state) {
            state.user = true
        },
    }
});

export const { createUser } = userSlice.actions
export default userSlice.reducer;
