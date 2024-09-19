import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PAGE_CONTENT } from "../../constants/content";


export const fetchAlbum = createAsyncThunk("albumSlicer/fetchAlbum",
    async (id) => {
        return PAGE_CONTENT.albums.find((album => +id === album.id));
    });

export const albumSlicer = createSlice({
    name: 'albumSlicer',
    initialState: {
        loadedAlbum: {
            id: 0,
            imageUrl: "",
            ukr: {
                albumTitle: "",
                albumDescription: "",
            },
            en: {
                albumTitle: "",
                albumDescription: "",
            },
            photoUrls: []
        },
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbum.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchAlbum.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedAlbum: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchAlbum.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default albumSlicer.reducer