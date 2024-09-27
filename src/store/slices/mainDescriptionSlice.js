import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PAGE_CONTENT } from '../../constants/content';

export const fetchMainDescription = createAsyncThunk("mainDescriptionSlice/fetchMainDescription", () => {
    return PAGE_CONTENT.mainSectionDescription;
});

export const updateMainDescription = createAsyncThunk("mainDescriptionSlice/updateMainDescription", (content) => {
    console.log(content);
    return content;
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
        isSuccess: false,

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