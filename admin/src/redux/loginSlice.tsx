import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const postLogin = createAsyncThunk("/login/post", async ({ button, login }: { button: EventTarget, login: { email: string; password: string } }) => {

    try {
        const res = await fetch("/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(login)
        });
        const data = await res.json();

        return data;
    } catch (err) {
        console.log(err);
    }

});

type InitialState = {
    isLogIn: boolean;
    isPending: boolean;
};

const initialState: InitialState = {
    isLogIn: window.localStorage.getItem('user') ? true : false,
    isPending: false,
};

const slice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(postLogin.pending, (state) => {
                state.isPending = true;
            })
            .addCase(postLogin.fulfilled, (state, action) => {

                state.isPending = false;

                if (action.payload.isAdmin) {
                    state.isLogIn = true
                    window.localStorage.setItem('user', JSON.stringify(action.payload));
                }
                else alert('You are not Authenticated');

                window.location.href = "/";
            })
            .addCase(postLogin.rejected, (state) => {
                state.isPending = false;
            })
    },
});

export const { } = slice.actions;
export default slice.reducer;