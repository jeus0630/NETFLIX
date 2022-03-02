import { configureStore } from "@reduxjs/toolkit";
import stats from "./statSlice";

export const store = configureStore({
    reducer: {
        stats
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;