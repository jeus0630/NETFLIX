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
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token
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

export const getNewUsers = createAsyncThunk("/new-users/get", async () => {

    try {
        const res = await fetch("/api/users?new=true", {
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token
            }
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }

});


type InitialState = {
    stats: {
        name: string;
        "New User": string;
    }[];
    newUsers: {
        _id: string;
        username: string;
        email: string;
        password: string;
        profilePic: string;
        isAdmin: boolean;
        createdAt: string;
        updatedAt: string;
        __v: 0
    }[];
};

const initialState: InitialState = {
    stats: [{
        name: null!,
        "New User": null!
    }],
    newUsers: [{
        _id: "",
        username: "",
        email: "",
        password: "",
        profilePic: "",
        isAdmin: false,
        createdAt: "",
        updatedAt: "",
        __v: 0
    }]
};

const slice = createSlice({
    name: "stats",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getStats.fulfilled, (state, action) => {
            state.stats = [
                ...action.payload
            ]
        })
        builder.addCase(getNewUsers.fulfilled, (state, action) => {
            state.newUsers = [
                ...action.payload
            ]
        });
    },
});

export const { } = slice.actions;
export default slice.reducer;