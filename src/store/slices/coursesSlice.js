import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { API_URL, API_LINKS } from '../../constants/content';

export const fetchCourses = createAsyncThunk("coursesSlice/fetchCourses", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.courses}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const updateCourseById = createAsyncThunk("coursesSlice/updateCourseById", async ({ courseId, updatedCourse }) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.courses}/${courseId}`, updatedCourse);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const createCourse = createAsyncThunk("coursesSlice/createCourse", async (newCourse) => {
    try {
        const response = await axios.post(`${API_URL}/${API_LINKS.courses}`, newCourse);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteCourseById = createAsyncThunk("coursesSlice/deleteCourseById", async (id) => {
    try {
        await axios.delete(`${API_URL}/${API_LINKS.courses}/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})

const emptyCourse = {
    id: 0,
    imageUrl: "",
    "ukr": {
        title: "",
        courseStart: "",
        coursePrice: "",
        courseLessonsAmount: "",
        courseTeacher: "",
        courseProgramTitle: "Теорія + Практика",
        courseProgramList: []
    },
    "en": {
        title: "",
        courseStart: "",
        coursePrice: "",
        courseLessonsAmount: "",
        courseTeacher: "",
        courseProgramTitle: "Theory + Practice",
        courseProgramList: []
    },
}


export const coursesSlice = createSlice({
    name: 'coursesSlice',
    initialState: {
        courses: [
            {
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
                },
            },
        ],
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
                courseProgramList: [""]
            },
            "en": {
                title: "",
                courseStart: "",
                coursePrice: "",
                courseLessonsAmount: "",
                courseTeacher: "",
                courseProgramTitle: "",
                courseProgramList: [""]
            },
        },
        isCoursesLoading: false,
        isCoursesFetchError: false,
        isCourseCreatingLoading: false,
        isCourseCreatingError: false,
        isCourseUpdatingLoading: false,
        isCourseUpdatingError: false,
        isCourseDeletingLoading: false,
        isCourseDeletingError: false,

    },
    reducers: {
        findCourseById: (state, action) => {
            return {
                ...state,
                chosenCourse: state.courses.find((course) => course.id === action.payload),
            }
        },
        resetChosenCourse: (state) => {
            return {
                ...state,
                chosenCourse: emptyCourse,
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            return {
                ...state,
                isCoursesLoading: true,
            }
        }).addCase(fetchCourses.rejected, (state) => {
            return {
                ...state,
                isCoursesLoading: false,
                isCoursesFetchError: true,
            }
        }).addCase(fetchCourses.fulfilled, (state, action) => {
            return {
                ...state,
                courses: action.payload,
                isCoursesLoading: false,
                isCoursesFetchError: false,
            }
        }).addCase(updateCourseById.pending, (state) => {
            return {
                ...state,
                isCourseUpdatingLoading: true,
            }
        }).addCase(updateCourseById.rejected, (state) => {
            return {
                ...state,
                isCourseUpdatingLoading: false,
                isCourseUpdatingError: true,
            }
        }).addCase(updateCourseById.fulfilled, (state, action) => {
            let newCoursesArray = state.courses.map(course => {
                if (course.id === action.payload.id) {
                    return action.payload
                }
                return course;
            })

            return {
                ...state,
                courses: newCoursesArray,
                isCourseUpdatingLoading: false,
                isCourseUpdatingError: false,
            }
        }).addCase(createCourse.pending, (state) => {
            return {
                ...state,
                isCourseCreatingLoading: true,
            }
        }).addCase(createCourse.rejected, (state) => {
            return {
                ...state,
                isCourseCreatingLoading: false,
                isCourseCreatingError: true,
            }
        }).addCase(createCourse.fulfilled, (state, action) => {
            let newCoursesArray = [...state.courses];
            newCoursesArray.push(action.payload);

            return {
                ...state,
                courses: newCoursesArray,
                isCourseCreatingLoading: false,
                isCourseCreatingError: false,
            }
        }).addCase(deleteCourseById.pending, (state) => {
            return {
                ...state,
                isCourseDeletingLoading: true,
            }
        }).addCase(deleteCourseById.rejected, (state) => {
            return {
                ...state,
                isCourseDeletingLoading: false,
                isCourseDeletingError: true,
            }
        }).addCase(deleteCourseById.fulfilled, (state, action) => {
            let filteredCourses = state.courses.filter((course) => course.id !== action.payload);
            return {
                ...state,
                courses: filteredCourses,
                isCourseDeletingLoading: false,
                isCourseDeletingError: false,
            }
        })
    }
})

export const { findCourseById, resetChosenCourse } = coursesSlice.actions;

export default coursesSlice.reducer