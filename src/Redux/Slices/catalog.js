import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const local_url = import.meta.env.VITE_API_BASE_URL;

export const fetchCatalog = createAsyncThunk(
    "product/fetchCatalog",
    async () => {
    try {
            const response = await axios({
            method: "GET",
            url: `${local_url}/bean`,});
            return response.data;
        } 
    catch (error) {
        return error?.response.data;
        }
    }
);

const initialState = {
    catalog: {},
    loading:false
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState, 
    extraReducers: (builder) => {
    builder
        .addCase(fetchCatalog.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchCatalog.fulfilled, (state, action) => {  
            state.catalog = action.payload
        })
        .addCase(fetchCatalog.rejected, (state, action) => {
            state.loading = false
        })}
});

export default catalogSlice.reducer;
