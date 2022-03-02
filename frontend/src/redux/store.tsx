import { configureStore } from "@reduxjs/toolkit";
import genre from "./genreSlice";
import listSlice from "./listSlice";
import { combineReducers } from "redux";

export const store = configureStore({
    reducer: {
        list: listSlice,
        genre: genre
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;