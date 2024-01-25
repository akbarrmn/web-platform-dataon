import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const local_url = import.meta.env.VITE_API_BASE_URL;

export const fetchDistributor = createAsyncThunk(
    "product/fetchDistributor",
    async () => {
    try {
            const response = await axios({
            method: "GET",
            url: `${local_url}/distributors`,});
            return response.data;
        } 
    catch (error) {
        return error?.response.data;
        }
    }
);

export const fetchSingle = createAsyncThunk(
    "product/fetchSingle",
    async (id) => {
    try {
            const response = await axios({
            method: "GET",
            url: `${local_url}/distributors/${id}`,});
            return response.data;
        } 
    catch (error) {
        return error?.response.data;
        }
    }
);

const initialState = {
    distributors: {},
    single:{},
    loading:false
};

const distributorSlice = createSlice({
    name: "distributors",
    initialState, 
    extraReducers: (builder) => {
    builder
        .addCase(fetchDistributor.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchDistributor.fulfilled, (state, action) => {  
            state.distributors = action.payload
        })
        .addCase(fetchDistributor.rejected, (state, action) => {
            state.loading = false
        }),

    builder
        .addCase(fetchSingle.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchSingle.fulfilled, (state, action) => {  
            state.single = action.payload
        })
        .addCase(fetchSingle.rejected, (state, action) => {
            state.loading = false
        })}
});

export default distributorSlice.reducer;
