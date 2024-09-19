import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchSendContacts = createAsyncThunk("contactSlicer/fetchSendContacts",
    async (contacts) => {
         setTimeout(() => ({}), 3000);
         return contacts;
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
            .addCase(fetchSendContacts.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchSendContacts.fulfilled, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                }
            }).addCase(fetchSendContacts.rejected, (state) => {
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