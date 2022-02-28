import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    content: string[],
    createdAt: string,
    genre: string,
    title: string,
    type: string,
    updatedAt: string,
    __v: number,
    _id: string
}[]

const initialState: InitialState = [
    {
        content: [],
        createdAt: '',
        genre: '',
        title: '',
        type: '',
        updatedAt: '',
        __v: 0,
        _id: ''
    }
]

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        getList: (state, action: PayloadAction<InitialState>) => {
            state = action.payload
        }
    }
})

export const { getList } = listSlice.actions;
export default listSlice.reducer;