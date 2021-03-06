import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("/movieList/get", async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/movies/`, {
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

export const deleteMovie = createAsyncThunk("/movie/delete", async (id: string) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/movies/${id}`, {
            method: 'DELETE',
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token
            }
        });
        const data = await res.json();

        return id;
    } catch (err) {
        console.log(err);

    }
})

export const createMovie = createAsyncThunk("/movie/post", async (param: any) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/movies/`, {
            method: 'POST',
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token,
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(param)
        })

        const data = await res.json();

        console.log(data);

    }
    catch (err) {
        console.log(err);

    }
})


export const updateMovie = createAsyncThunk("/movie/put", async ({ id, info }: { id: string, info: InitialState }) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/movies/${id}`, {
            method: "PUT",
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token,
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(info)
        });
        const fetchedData = await res.json();

        return fetchedData;
    } catch (err) {
        console.log(err);
    }
})

type Movie = {
    id: string;
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
}

type InitialState = {
    movies: Movie[],
    movie: Movie,
    isPending: boolean
};

const initialState: InitialState = {
    movies: [
        {
            id: "",
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
    ],
    movie: {
        id: "",
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
    },
    isPending: false
};

const slice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<Movie>) => {
            state.movie = action.payload;
        },
        setPending: (state) => {
            state.isPending = true;
        },
        resetPending: (state) => {
            state.isPending = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            const movies = action.payload.map(el => ({
                ...el,
                id: el._id
            })).reverse();

            state.movies = movies;
        })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.movies = state.movies.filter(el => {
                    return el._id !== action.payload;
                })
            })
            .addCase(updateMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.isPending = false;
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.isPending = false;
            })
    },
});

export const { setMovie, setPending, resetPending } = slice.actions;
export default slice.reducer;