import { configureStore } from "@reduxjs/toolkit";
import stats from "./statSlice";
import login from "./loginSlice";
import movies from "./movieListSlice";

export const store = configureStore({
    reducer: {
        stats,
        login,
        movies
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;