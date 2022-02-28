import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const getList = createAsyncThunk("/lists/get", async () => {
  const res = await fetch("/api/lists");
  const data = await res.json();

  return data;
});

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(getList.pending, (state, action) => {
        console.log("pending...");
      })
      .addCase(getList.rejected, (state, acton) => {
        console.log("failed");
      });
  },
});

export default listSlice.reducer;
