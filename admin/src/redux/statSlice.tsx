import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getStats = createAsyncThunk("/stats/get", async () => {

    const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    try {
        const res = await fetch("/api/users/stats", {
            headers: {
                token: "barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWYwOGMzYTBhOTQ3YzdkMWUyOTJiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjIwMTQ0NSwiZXhwIjoxNjQ2NjMzNDQ1fQ.nNNpWj7Y-RNTNIXOpfzOHKutfasiXtmHFHbZVGWzZvU"
            }
        });

        const data = await res.json();
        
        type Stat = {
            _id: number;
            total: number;
        }

        const stats = data.sort((a: Stat, b: Stat) => a._id - b._id).map((el: Stat) => ({
            name: MONTHS[el._id - 1],
            "New User": el.total
        }))

        return stats;
    } catch (err) {
        console.log(err);
    }
});

type InitialState = {
    name: string;
    "New User": string;
}[];

const initialState: InitialState = [{
    name: null!,
    "New User": null!
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