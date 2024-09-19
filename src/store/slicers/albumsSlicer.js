import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PAGE_CONTENT } from "../../constants/content";


export const fetchAlbums = createAsyncThunk("albumsSlicer/fetchAlbums",
    async () => {
        return PAGE_CONTENT.albums;
    });

export const albumsSlicer = createSlice({
    name: 'albumsSlicer',
    initialState: {
        loadedAlbums: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchAlbums.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedAlbums: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchAlbums.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default albumsSlicer.reducer