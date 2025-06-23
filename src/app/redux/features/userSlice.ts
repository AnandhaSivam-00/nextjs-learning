import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
    loading: boolean;
    userData: any;
    error: any;
}
interface userDataType {
    username: string;
    email: string;
    password: string;
}

const initialState: initialStateType = {
    loading: false,
    userData: null,
    error: null
};

export const createNewUser = createAsyncThunk(
    'user/createNewUser',
    async (userData: userDataType, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/users/signup', userData);
            return response.data;
        }
        catch(error: any) {
            return rejectWithValue(error.response?.data || 'An error occurred while creating the user.');
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            
    }
});

export const { clearUserError } = userSlice.actions;
export default userSlice.reducer;