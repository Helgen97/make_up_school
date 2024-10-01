import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, API_LINKS } from '../../constants/content';


export const postSendContacts = createAsyncThunk("contactSlicer/postSendContacts", async (contacts) => {
    try {
        await axios.post(`${API_URL}/${API_LINKS.clients}`, contacts)
    } catch (error) {
        console.log(error);
    }
});

export const contactSlicer = createSlice({
    name: 'contactSlicer',
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postSendContacts.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(postSendContacts.fulfilled, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                }
            }).addCase(postSendContacts.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                }
            });
    }
})

export default contactSlicer.reducer