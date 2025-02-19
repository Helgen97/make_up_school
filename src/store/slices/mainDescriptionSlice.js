import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_LINKS, API_URL } from '../../constants/content';
import axios from 'axios';
import { authHeader } from "./authSlice"

export const fetchMainDescription = createAsyncThunk("mainDescriptionSlice/fetchMainDescription", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.mainDescription}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateMainDescription = createAsyncThunk("mainDescriptionSlice/updateMainDescription", async (content) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.mainDescription}`, content, authHeader);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


export const mainDescriptionSlice = createSlice({
    name: 'mainDescriptionSlice',
    initialState: {
        mainContent: {
            en: "",
            ukr: ""
        },
        isLoading: false,
        isError: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMainDescription.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(fetchMainDescription.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(fetchMainDescription.fulfilled, (state, action) => {
            return {
                ...state,
                mainContent: action.payload,
                isLoading: false,
                isError: false,
            }
        }).addCase(updateMainDescription.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(updateMainDescription.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(updateMainDescription.fulfilled, (state, action) => {
            return {
                ...state,
                mainContent: action.payload,
                isLoading: false,
                isError: false,
            }
        })
    }
})

export default mainDescriptionSlice.reducer