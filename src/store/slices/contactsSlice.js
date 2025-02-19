import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_LINKS, API_URL } from '../../constants/content';
import axios from 'axios';
import { authHeader } from "./authSlice"

export const fetchContacts = createAsyncThunk("contactsSlice/fetchContacts", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.contacts}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateContacts = createAsyncThunk("contactsSlice/updateContacts", async (content) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.contacts}`, content, authHeader);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


export const contactsSlice = createSlice({
    name: 'contactsSlice',
    initialState: {
        contacts: {
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
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(fetchContacts.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            return {
                ...state,
                contacts: action.payload,
                isLoading: false,
                isError: false,
            }
        }).addCase(updateContacts.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(updateContacts.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(updateContacts.fulfilled, (state, action) => {
            return {
                ...state,
                contacts: action.payload,
                isLoading: false,
                isError: false,
            }
        })
    }
})

export default contactsSlice.reducer