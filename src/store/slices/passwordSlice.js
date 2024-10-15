import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_LINKS, API_URL } from '../../constants/content';
import axios from 'axios';

export const updateUserPassword = createAsyncThunk("passwordSlice/updateUserPassword", async (content) => {
    try {
        await axios.put(`${API_URL}/${API_LINKS.passwordApi}`, content, { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.log(error);

    }
})

const passwordSlice = createSlice({
    name: 'passwordSlice',
    initialState: {
        isLoading: false,
        isError: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserPassword.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                }
            }).addCase(updateUserPassword.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            }).addCase(updateUserPassword.fulfilled, (state, action) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                }
            })
    }
})

export default passwordSlice.reducer