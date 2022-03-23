import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("/api/auth/register", async (info: Info) => {

    const { step, ...rest } = info;

    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/auth/register`, {
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

export const logInUser = createAsyncThunk("/api/auth/login", async (data: {
    email: string;
    password: string;
}) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const fetchedData = await res.json();

        return fetchedData;
    } catch (err) {
        console.log(err);
    }
})

export type Info = {
    email: string;
    password: string;
    step: number;
}

type InitialState = {
    info: Info;
    isCreated: boolean;
    isLogIn: boolean;
    wrongInfo: boolean;
};

const initialState: InitialState = {
    info: {
        email: '',
        password: '',
        step: 0
    },
    isCreated: false,
    isLogIn: localStorage.getItem("user")? true : false,
    wrongInfo: false
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
        },
        setLogout: (state) => {
            state.isLogIn = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isCreated = true;
            })
            .addCase(logInUser.fulfilled, (state, action) => {
                if (action.payload.token) {
                    localStorage.setItem('user', JSON.stringify("barer " + action.payload.token));
                    state.isLogIn = true;
                } else {
                    state.wrongInfo = true;
                }
            })
    },
});

export const { setInfo, resetState, setLogout } = slice.actions;
export default slice.reducer;