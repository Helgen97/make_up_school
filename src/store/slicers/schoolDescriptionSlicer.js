import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PAGE_CONTENT } from "../../constants/content";


export const fetchSchoolDescription = createAsyncThunk("schoolDescriptionSlicer/fetchSchoolDescription",
    async () => {
        return PAGE_CONTENT.schoolDescription;
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