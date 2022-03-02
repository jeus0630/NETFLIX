import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("", async () => {

});

type InitialState = {
    genre: string
};

const initialState: InitialState = {
    genre: ""
};

const slice = createSlice({
    name: "genre",
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        }
    },
    extraReducers: (builder) => {

    },
});

export const { setGenre } = slice.actions;
export default slice.reducer;