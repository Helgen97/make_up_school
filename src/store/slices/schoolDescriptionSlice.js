import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PAGE_CONTENT } from '../../constants/content';

export const fetchSchoolDescriptions = createAsyncThunk("schoolDescriptions/fetchSchoolDescriptions", () => {
    return PAGE_CONTENT.schoolDescription;
});

export const updateSchoolDescriptions = createAsyncThunk("schoolDescriptions/updateSchoolDescriptions", (content) => {
    console.log(content);
    return content;
})


export const schoolDescriptionsSlice = createSlice({
    name: 'schoolDescriptions',
    initialState: {
        schoolDescriptions: {
            en: [""],
            ukr: [""],
        },
        isLoading: false,
        isError: false,
        isSuccess: false,

    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSchoolDescriptions.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(fetchSchoolDescriptions.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(fetchSchoolDescriptions.fulfilled, (state, action) => {
            return {
                ...state,
                schoolDescriptions: action.payload,
                isLoading: false,
                isError: false,
            }
        }).addCase(updateSchoolDescriptions.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(updateSchoolDescriptions.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(updateSchoolDescriptions.fulfilled, (state, action) => {
            return {
                ...state,
                mainContent: action.payload,
                isLoading: false,
                isError: false,
            }
        })
    }
})

export default schoolDescriptionsSlice.reducer