import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getLists = createAsyncThunk("/lists/get", async () => {
    try {
        const res = await fetch('/api/lists/', {
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token
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

export const putLists = createAsyncThunk("/lists/put", async (data: {
    id: string;
    list: {
        title: string;
        type: string;
        genre: string;
    }
}) => {
    try {
        const res = await fetch(`/api/lists/${data.id}`, {
            method: "PUT",
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.list)
        });
        const fetchedData = await res.json();
        console.log(fetchedData);

        return fetchedData;
    } catch (err) {
        console.log(err);
    }
})

export const createLists = createAsyncThunk("/lists/post", async (data: {
    title: string;
    type: string;
    genre: string;
    content: string[]
}) => {
    try {
        const res = await fetch("/api/lists/", {
            method: "POST",
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token,
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

export const deleteLists = createAsyncThunk("/lists/delete", async (id: string) => {
    try {
        const res = await fetch(`/api/lists/${id}`, {
            method: "DELETE",
            headers: {
                token: "barere " + JSON.parse(localStorage.getItem('user') as string).token,
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        return id;
    } catch (err) {
        console.log(err);
    }
})

type List = {
    _id: string;
    id: string;
    title: string;
    type: string;
    genre: string;
    content: string[];
    createdAt: string
    updatedAt: string;
    __v: number;
}

type Lists = List[]

type InitialState = {
    lists: Lists,
    list: List,
    isPending: Boolean
};

const initialState: InitialState = {
    lists: [{
        _id: '',
        id: '',
        title: '',
        type: '',
        genre: '',
        content: [
            ''
        ],
        createdAt: '',
        updatedAt: '',
        __v: 0
    }],
    list: {
        content: [''],
        createdAt: "",
        genre: "",
        id: "",
        title: "",
        type: "",
        updatedAt: "",
        __v: 0,
        _id: "",
    },
    isPending: false
};

const slice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        setListVal: (state, action) => {
            state.list = action.payload;
        },
        resetPending: (state) => {
            state.isPending = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLists.fulfilled, (state, action: PayloadAction<Lists>) => {
            state.lists = action.payload;
        })
            .addCase(putLists.pending, (state) => {
                state.isPending = true;
            })
            .addCase(putLists.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isPending = false;
            })
            .addCase(deleteLists.fulfilled, (state, action) => {
                state.lists = state.lists.filter(list => list._id !== action.payload);
            })
            .addCase(createLists.pending, (state) => {
                state.isPending = true;
            })
            .addCase(createLists.fulfilled, (state) => {
                state.isPending = false;
            })
            
    },
});

export const { setListVal, resetPending } = slice.actions;
export default slice.reducer;