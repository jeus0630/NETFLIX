import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getStats = createAsyncThunk("/stats/get", async () => {
    try {
        const res = await fetch("/api/users/stats", {
            headers: {
                token: "barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWYwOGMzYTBhOTQ3YzdkMWUyOTJiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjIwMTQ0NSwiZXhwIjoxNjQ2NjMzNDQ1fQ.nNNpWj7Y-RNTNIXOpfzOHKutfasiXtmHFHbZVGWzZvU"
            }
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }
});

type InitialState = {
    _id: number;
    total: number;
}[];

const initialState: InitialState = [{
    _id: 0,
    total: 0
}];

const slice = createSlice({
    name: "stats",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getStats.fulfilled, (state, action) => {
            return [
                ...action.payload
            ]
        });
    },
});

export const { } = slice.actions;
export default slice.reducer;