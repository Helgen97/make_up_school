import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PAGE_CONTENT } from "../../constants/content";


export const fetchTeachers = createAsyncThunk("teacherSlicer/fetchTeachers",
    async () => {
        return PAGE_CONTENT.teachers;
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