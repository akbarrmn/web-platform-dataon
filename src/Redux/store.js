import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./Slices/catalog";
import distributor from "./Slices/distributor";

const rootReducer = {
    catalogSlices : catalogReducer,
    distributorSlices: distributor
}

const store = configureStore({
    reducer: rootReducer
});

export default store;