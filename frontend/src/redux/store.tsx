import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./genreSlice";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";
export const store = configureStore({
    reducer: {
        list: listSlice,
        genre: genreSlice,
        movie: movieSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;