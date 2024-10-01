import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';


export const fetchMainDescription = createAsyncThunk("mainDescriptionSlicer/fetchMainDescription", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.mainDescription}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const mainDescriptionSlicer = createSlice({
    name: 'mainDescriptionSlicer',
    initialState: {
        loadedDescription: {
            "ukr": "",
            "en": "",
        },
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMainDescription.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchMainDescription.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedDescription: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchMainDescription.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default mainDescriptionSlicer.reducer