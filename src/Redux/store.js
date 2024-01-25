import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./Slices/catalog";
import distributor from "./Slices/distributor";
import userReducer from "./Slices/auth";

const rootReducer = {
    authSlices: userReducer ,
    catalogSlices : catalogReducer,
    distributorSlices: distributor
}

const store = configureStore({
    reducer: rootReducer
});

export default store;