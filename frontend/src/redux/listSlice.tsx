import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("/lists/get", async () => {

    try {
        const res = await fetch("/api/lists", {
            headers: {
                'token': 'barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI0OGFkMzc4MDJkMmMzNGRmNjhjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDYyMDA1NjEsImV4cCI6MTY0NjYzMjU2MX0.NWAZqIW3uOqK_hElLwvWzN6ByPsxbFRmSJQHxI8vAF4'
            }
        });
        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }

});

export const getRandomList = createAsyncThunk("/random-lists/get",
    async ({ type, genre }: { type?: string, genre?: string }) => {
        try {
            const res = await fetch(
                `/api/lists?${type ? "type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                {
                    headers: {
                        'token': 'barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI0OGFkMzc4MDJkMmMzNGRmNjhjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDYyMDA1NjEsImV4cCI6MTY0NjYzMjU2MX0.NWAZqIW3uOqK_hElLwvWzN6ByPsxbFRmSJQHxI8vAF4'
                    }
                });
            const data = await res.json();

            return data;
        } catch (err) {
            console.log(err);

        }

    })

type InitialState = {
    content: string[];
    createdAt: string;
    genre: string;
    title: string;
    type: string;
    updatedAt: string;
    __v: number;
    _id: string;
}[];

const initialState: InitialState = [
    {
        content: [],
        createdAt: "",
        genre: "",
        title: "",
        type: "",
        updatedAt: "",
        __v: 0,
        _id: "",
    },
];

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getList.fulfilled, (state, action: PayloadAction<InitialState>) => {
                console.log('Success');
                console.log(action.payload);
                state = action.payload;
            })
            .addCase(getList.pending, (state, action) => {
                console.log("pending...");
            })
            .addCase(getList.rejected, (state, acton) => {
                console.log("failed");
            })
            .addCase(getRandomList.fulfilled, (state, action: PayloadAction<InitialState>) => {
                console.log('Success');
                return [
                    ...state,
                    ...action.payload
                ]
            })
            .addCase(getRandomList.pending, (state, action) => {
                console.log("pending...");
            })
            .addCase(getRandomList.rejected, (state, acton) => {
                console.log("failed");
            })
    },
});

export default listSlice.reducer;