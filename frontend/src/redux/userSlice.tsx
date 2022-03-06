import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("/api/auth/register", async (info: Info) => {

    const { step, ...rest } = info;

    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rest)
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }

});

export type Info = {
    email: string;
    password: string;
    step: number;
}

type InitialState = {
    info: Info;
    isCreated: boolean;
};

const initialState: InitialState = {
    info: {
        email: '',
        password: '',
        step: 0
    },
    isCreated: false
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<Info>) => {
            state.info = action.payload;
        },
        resetState: (state) => {
            return {
                ...state,
                ...initialState
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isCreated = true;
            })
    },
});

export const { setInfo, resetState } = slice.actions;
export default slice.reducer;