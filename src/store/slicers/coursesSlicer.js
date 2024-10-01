import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_LINKS } from "../../constants/content";
import axios from 'axios';


export const fetchCourses = createAsyncThunk("coursesSlicer/fetchCourses", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.courses}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const coursesSlicer = createSlice({
    name: 'coursesSlicer',
    initialState: {
        loadedCourses: [{
            id: 0,
            imageUrl: "",
            "ukr": {
                title: "",
                courseStart: "",
                coursePrice: "",
                courseLessonsAmount: "",
                courseTeacher: "",
                courseProgramTitle: "",
                courseProgramList: []
            },
            "en": {
                title: "",
                courseStart: "",
                coursePrice: "",
                courseLessonsAmount: "",
                courseTeacher: "",
                courseProgramTitle: "",
                courseProgramList: []
            }
        }],
        chosenCourse: {
            id: 0,
            imageUrl: "",
            "ukr": {
                title: "",
                courseStart: "",
                coursePrice: "",
                courseLessonsAmount: "",
                courseTeacher: "",
                courseProgramTitle: "",
                courseProgramList: []
            },
            "en": {
                title: "",
                courseStart: "",
                coursePrice: "",
                courseLessonsAmount: "",
                courseTeacher: "",
                courseProgramTitle: "",
                courseProgramList: []
            }
        },
        isLoading: false,
        isError: false,
    },
    reducers: {
        chooseCourse: (state, action) => {
            let chosenCourse = state.loadedCourses.find((course) => course.id === action.payload);
            return {
                ...state,
                chosenCourse: chosenCourse,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            }).addCase(fetchCourses.fulfilled, (state, action) => {
                return {
                    ...state,
                    loadedCourses: action.payload,
                    isLoading: false,
                    isError: false,
                }
            }).addCase(fetchCourses.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            });
    }
})

export const { chooseCourse } = coursesSlicer.actions;

export default coursesSlicer.reducer