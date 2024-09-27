import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PAGE_CONTENT } from '../../constants/content';

export const fetchAlbums = createAsyncThunk("albumsSlice/fetchAlbums", () => {
    return PAGE_CONTENT.albums;
});

export const updateAlbumById = createAsyncThunk("albumsSlice/updateAlbumById", ({ albumId, updatedAlbum }) => {
    console.log(updatedAlbum);
    return updatedAlbum;
});

export const createAlbum = createAsyncThunk("albumsSlice/createAlbum", (newAlbum) => {
    console.log(newAlbum);
    return newAlbum;
});

export const deleteAlbumById = createAsyncThunk("albumsSlice/deleteAlbumById", (id) => {
    console.log(id);
    return id;
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