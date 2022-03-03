import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("/movieList/get", async () => {
    try {
        const res = await fetch('/api/movies/', {
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

type Movies = {
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
}[]

type InitialState = {
    movies: Movies
};

const initialState: InitialState = {
    movies: [
        {
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
            __v: 0
        }
    ]
};

const slice = createSlice({
    name: "movies",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, action: PayloadAction<Movies>) => {
            const movies = action.payload.map(el => ({
                ...el,
                id: el._id
            }))

            state.movies = movies;
        })
    },
});

export const { } = slice.actions;
export default slice.reducer;