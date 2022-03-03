import { configureStore } from "@reduxjs/toolkit";
import stats from "./statSlice";
import login from "./loginSlice";

export const store = configureStore({
    reducer: {
        stats,
        login
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;