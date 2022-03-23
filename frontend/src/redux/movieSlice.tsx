import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getRandomMovie = createAsyncThunk('/random-movie/get',
    async (type?: string) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_SERVER_API_URL}/api/movies/random?type=${type}`,
                {
                    headers: {
                        token: JSON.parse(localStorage.getItem("user") as string)
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
            return {
                ...state,
                ...action.payload
            }
        })
    },
});

export const { } = slice.actions;
export default slice.reducer;