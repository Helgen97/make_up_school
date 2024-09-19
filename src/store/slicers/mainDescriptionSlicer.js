import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PAGE_CONTENT } from "../../constants/content";


export const fetchMainDescription = createAsyncThunk("mainDescriptionSlicer/fetchMainDescription",
    async () => {
        return PAGE_CONTENT.mainSectionDescription;
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