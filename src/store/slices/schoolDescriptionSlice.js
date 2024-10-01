import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_LINKS, API_URL } from '../../constants/content';
import axios from 'axios';

export const fetchSchoolDescriptions = createAsyncThunk("schoolDescriptions/fetchSchoolDescriptions", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.schoolDescription}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const updateSchoolDescriptions = createAsyncThunk("schoolDescriptions/updateSchoolDescriptions", async (content) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.schoolDescription}`, content);
        return response.data;
    } catch (error) {
        console.log(error);
    }
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