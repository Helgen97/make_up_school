import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';


export const fetchAlbums = createAsyncThunk("albumsSlicer/fetchAlbums", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.albums}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
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