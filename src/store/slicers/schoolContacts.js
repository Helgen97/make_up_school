import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';

export const fetchSchoolContacts = createAsyncThunk("schoolContactsSlicer/fetchSchoolContacts", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.contacts}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const schoolContactsSlicer = createSlice({
    name: 'schoolContactsSlicer',
    initialState: {
        schoolContacts: {
            id: 1,
            phone: "",
            workingHoursEn: "",
            workingHoursUA: "",
            addressEn: "",
            addressUa: "",
            instagram: "",
        },
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchoolContacts.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchSchoolContacts.fulfilled, (state, action) => {
                return {
                    ...state,
                    schoolContacts: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchSchoolContacts.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default schoolContactsSlicer.reducer