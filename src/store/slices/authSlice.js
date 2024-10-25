import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, API_LINKS } from '../../constants/content';
import axios from 'axios';

export const logIn = createAsyncThunk("authSlice/logIn", async (credential) => {
    try {
        const response = await axios.post(`${API_URL}/${API_LINKS.auth}`, credential);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const authHeader = {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    }
}


export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isAuth: false,
        isLoading: false,
        isError: false,
    },
    reducers: {
        checkAuthIsValid: (state) => {
            let isTokenAvailable = localStorage.getItem("token") !== "";
            let isTokenValid = new Date(+localStorage.getItem("tokenExpirationDate")) > Date.now();

            return {
                ...state,
                isAuth: isTokenAvailable && isTokenValid,
            }
        },
        logOut: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExpirationDate");
            return {
                ...state,
                isAuth: false
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
            return {
                ...state,
                isLoading: true
            }
        }).addCase(logIn.rejected, (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }).addCase(logIn.fulfilled, (state, action) => {

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("tokenExpirationDate", Date.now() + action.payload.expireIn);

            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isError: false,
            }
        })
    }
})

export const { checkAuthIsValid, logOut } = authSlice.actions;

export default authSlice.reducer;