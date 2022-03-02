import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getRandomMovie = createAsyncThunk('/random-movie/get',
    async (type?: string) => {
        try {
            const res = await fetch(
                `api/movies/random?type=${type}`,
                {
                    headers: {
                        'token': 'barere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI0OGFkMzc4MDJkMmMzNGRmNjhjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDYyMDA1NjEsImV4cCI6MTY0NjYzMjU2MX0.NWAZqIW3uOqK_hElLwvWzN6ByPsxbFRmSJQHxI8vAF4'
                    }
                });

            const [data] = await res.json();

            return data;
        } catch (err) {
            console.log(err);
        }
    }
)

type InitialState = {
    _id: string;
    title: string;
    desc: string;
    img: string;
    imgTitle: string;
    imgSm: string;
    trailer: string;
    video: string;
    year: string;
    limit: string;
    genre: string;
    isSeries: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

const initialState: InitialState = {
    _id: "",
    title: "",
    desc: "",
    img: "",
    imgTitle: "",
    imgSm: "",
    trailer: "",
    video: "",
    year: "",
    limit: "",
    genre: "",
    isSeries: false,
    createdAt: "",
    updatedAt: "",
    __v: 0,
}

const slice = createSlice({
    name: "movie",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getRandomMovie.fulfilled, (state, action: PayloadAction<InitialState>) => {
            console.log('Success');
            return {
                ...state,
                ...action.payload
            }
        })
            .addCase(getRandomMovie.pending, (state, action) => {
                console.log("pending...");
            })
            .addCase(getRandomMovie.rejected, (state, acton) => {
                console.log("failed");
            })
    },
});

export const { } = slice.actions;
export default slice.reducer;