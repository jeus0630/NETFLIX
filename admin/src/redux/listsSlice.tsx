import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getLists = createAsyncThunk("/lists/get", async () => {
    try {
        const res = await fetch('/api/lists/', {
            headers: {
                'token': 'barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI0OGFkMzc4MDJkMmMzNGRmNjhjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDYyMDA1NjEsImV4cCI6MTY0NjYzMjU2MX0.NWAZqIW3uOqK_hElLwvWzN6ByPsxbFRmSJQHxI8vAF4'
            }
        });
        const data = await res.json();

        return data.map((item: {
            _id: string;
            title: string;
            type: string;
            genre: string;
            content: string[];
            createdAt: string
            updatedAt: string;
            __v: number;
        }) => {
            const id = item._id;
            return {
                ...item,
                id
            }
        });
    } catch (err) {
        console.log(err);
    }

});

type Lists = {
    _id: string;
    id: string;
    title: string;
    type: string;
    genre: string;
    content: string[];
    createdAt: string
    updatedAt: string;
    __v: number;
}[]

type InitialState = {
    lists: Lists
};

const initialState: InitialState = {
    lists: [{
        _id: '',
        id: '',
        title: 'lists',
        type: '',
        genre: '',
        content: [
            ''
        ],
        createdAt: '',
        updatedAt: '',
        __v: 0
    }]
};

const slice = createSlice({
    name: "lists",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getLists.fulfilled, (state, action: PayloadAction<Lists>) => {
            state.lists = action.payload;
        })
    },
});

export const { } = slice.actions;
export default slice.reducer;