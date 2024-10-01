import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';


export const fetchSchoolDescription = createAsyncThunk("schoolDescriptionSlicer/fetchSchoolDescription", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.schoolDescription}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const schoolDescriptionSlicer = createSlice({
    name: 'schoolDescriptionSlicer',
    initialState: {
        loadedDescription: {
            "ukr": [],
            "en": []
        },
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchoolDescription.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchSchoolDescription.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedDescription: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchSchoolDescription.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default schoolDescriptionSlicer.reducer