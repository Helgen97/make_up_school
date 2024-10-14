import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_LINKS, API_URL } from '../../constants/content';
import axios from 'axios';

export const fetchBotSettings = createAsyncThunk("botSettingsSlice/fetchBotSettings", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.botSettings}`);
        return response.data;
    } catch (error) {
        console.log(error);

    }
});

export const updateBotSettings = createAsyncThunk("botSettingsSlice/updateBotSettings", async (content) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.botSettings}`, content);
        return response.data;
    } catch (error) {
        console.log(error);

    }
})


export const botSettingsSlice = createSlice({
    name: 'botSettingsSlice',
    initialState: {
        botSettings: {
            id: 0,
            botToken: "",
            chatId: "",
        },
        isLoading: false,
        isError: false,
        isSuccess: false,

    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBotSettings.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(fetchBotSettings.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(fetchBotSettings.fulfilled, (state, action) => {
            return {
                ...state,
                botSettings: action.payload,
                isLoading: false,
                isError: false,
            }
        }).addCase(updateBotSettings.pending, (state) => {
            return {
                ...state,
                isLoading: true,
            }
        }).addCase(updateBotSettings.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(updateBotSettings.fulfilled, (state, action) => {
            return {
                ...state,
                botSettings: action.payload,
                isLoading: false,
                isError: false,
            }
        })
    }
})

export default botSettingsSlice.reducer