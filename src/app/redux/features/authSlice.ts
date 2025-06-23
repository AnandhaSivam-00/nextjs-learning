import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
    loading: boolean;
    authUserData: any;
    error: any;
}
interface userDataType {
    email: string;
    password: string;
}

const initialState: initialStateType = {
    loading: false,
    authUserData: null,
    error: null
}

export const loginAuthUser = createAsyncThunk(
    'auth/loginAuthUser',
    async (userData: userDataType, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/users/login', userData);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.response?.data || 'An error occurred while logging in.');
        }
    }
);

export const logoutAuthUser = createAsyncThunk(
    'auth/logoutAuthUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.put('/api/users/logout'); // Need to be changed

            return null;
        } 
        catch(error: any) {
            return rejectWithValue(error.response?.data || 'An error occurred while logging out.');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuthError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAuthUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAuthUser.fulfilled, (state, action) => {
                state.loading = false;
                state.authUserData = action.payload;
                state.error = null;
            })
            .addCase(loginAuthUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutAuthUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutAuthUser.fulfilled, (state, action) => {
                state.loading = false;
                state.authUserData = action.payload;
            })
            .addCase(logoutAuthUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearAuthError } = authSlice.actions;
export default authSlice.reducer;