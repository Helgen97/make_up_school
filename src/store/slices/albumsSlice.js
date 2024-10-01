import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, API_LINKS } from '../../constants/content';
import axios from 'axios';

export const fetchAlbums = createAsyncThunk("albumsSlice/fetchAlbums", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.albums}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const updateAlbumById = createAsyncThunk("albumsSlice/updateAlbumById", async ({ albumId, updatedAlbum }) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.albums}/${albumId}`, updatedAlbum);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const createAlbum = createAsyncThunk("albumsSlice/createAlbum", async (newAlbum) => {
    try {
        const response = await axios.post(`${API_URL}/${API_LINKS.albums}`, newAlbum);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteAlbumById = createAsyncThunk("albumsSlice/deleteAlbumById", async (id) => {
    try {
        await axios.delete(`${API_URL}/${API_LINKS.albums}/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})

const emptyAlbum = {
    id: 0,
    imageUrl: "",
    "ukr": {
        albumTitle: "",
        albumDescription: "",
    },
    "en": {
        albumTitle: "",
        albumDescription: "",
    },
    photoUrls: [""]
}


export const albumsSlice = createSlice({
    name: 'albumsSlice',
    initialState: {
        albums: [
            {
                id: 0,
                imageUrl: "",
                "ukr": {
                    albumTitle: "",
                    albumDescription: "",
                },
                "en": {
                    albumTitle: "",
                    albumDescription: "",
                },
                photoUrls: [""]
            }
        ],
        chosenAlbum: {
            id: 0,
            imageUrl: "",
            "ukr": {
                albumTitle: "",
                albumDescription: "",
            },
            "en": {
                albumTitle: "",
                albumDescription: "",
            },
            photoUrls: [""]
        },
        isAlbumsLoading: false,
        isAlbumsFetchError: false,
        isAlbumCreatingLoading: false,
        isAlbumCreatingError: false,
        isAlbumUpdatingLoading: false,
        isAlbumUpdatingError: false,
        isAlbumDeletingLoading: false,
        isAlbumDeletingError: false,

    },
    reducers: {
        findAlbumById: (state, action) => {
            return {
                ...state,
                chosenAlbum: state.albums.find((album) => album.id === action.payload),
            }
        },
        resetChosenAlbum: (state) => {
            return {
                ...state,
                chosenAlbum: emptyAlbum,
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            return {
                ...state,
                isAlbumsLoading: true,
            }
        }).addCase(fetchAlbums.rejected, (state) => {
            return {
                ...state,
                isAlbumsLoading: false,
                isAlbumsFetchError: true,
            }
        }).addCase(fetchAlbums.fulfilled, (state, action) => {
            return {
                ...state,
                albums: action.payload,
                isAlbumsLoading: false,
                isAlbumsFetchError: false,
            }
        }).addCase(updateAlbumById.pending, (state) => {
            return {
                ...state,
                isAlbumUpdatingLoading: true,
            }
        }).addCase(updateAlbumById.rejected, (state) => {
            return {
                ...state,
                isAlbumUpdatingLoading: false,
                isAlbumUpdatingError: true,
            }
        }).addCase(updateAlbumById.fulfilled, (state, action) => {
            let newAlbumsArray = state.albums.map(album => {
                if (album.id === action.payload.id) {
                    return action.payload
                }
                return album;
            })

            return {
                ...state,
                albums: newAlbumsArray,
                isAlbumUpdatingLoading: false,
                isAlbumUpdatingError: false,
            }
        }).addCase(createAlbum.pending, (state) => {
            return {
                ...state,
                isAlbumCreatingLoading: true,
            }
        }).addCase(createAlbum.rejected, (state) => {
            return {
                ...state,
                isAlbumCreatingLoading: false,
                isAlbumCreatingError: true,
            }
        }).addCase(createAlbum.fulfilled, (state, action) => {
            let newAlbumArray = [...state.albums];
            newAlbumArray.push(action.payload);

            return {
                ...state,
                albums: newAlbumArray,
                isAlbumsCreatingLoading: false,
                isAlbumsCreatingError: false,
            }
        }).addCase(deleteAlbumById.pending, (state) => {
            return {
                ...state,
                isAlbumDeletingLoading: true,
            }
        }).addCase(deleteAlbumById.rejected, (state) => {
            return {
                ...state,
                isAlbumDeletingLoading: false,
                isAlbumDeletingError: true,
            }
        }).addCase(deleteAlbumById.fulfilled, (state, action) => {
            let filteredAlbums = state.albums.filter((album) => album.id !== action.payload);
            return {
                ...state,
                albums: filteredAlbums,
                isAlbumsDeletingLoading: false,
                isAlbumsDeletingError: false,
            }
        })
    }
})

export const { findAlbumById, resetChosenAlbum } = albumsSlice.actions;

export default albumsSlice.reducer