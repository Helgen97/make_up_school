import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';


export const fetchTeachers = createAsyncThunk("teacherSlicer/fetchTeachers", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.teachers}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const teacherSlicer = createSlice({
    name: 'teacherSlicer',
    initialState: {
        loadedTeachers: [
            {
                id: 0,
                imageUrl: "",
                "ukr": {
                    teacherName: " ",
                    teacherOccupation: "",
                    teacherFacts: [""],
                    teacherAchievements: [""]
                },
                "en": {
                    teacherName: "",
                    teacherOccupation: "",
                    teacherFacts: [""],
                    teacherAchievements: [""]
                }
            }
        ],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchTeachers.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedTeachers: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchTeachers.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export default teacherSlicer.reducer