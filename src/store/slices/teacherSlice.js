import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, API_LINKS } from '../../constants/content';
import axios from 'axios';

export const fetchTeachers = createAsyncThunk("teachersSlice/fetchTeachers", async () => {
    try {
        const response = await axios.get(`${API_URL}/${API_LINKS.teachers}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const updateTeacherById = createAsyncThunk("teachersSlice/updateTeacherById", async ({ teacherId, updatedTeacher }) => {
    try {
        const response = await axios.put(`${API_URL}/${API_LINKS.teachers}/${teacherId}`, updatedTeacher);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const createTeacher = createAsyncThunk("teachersSlice/createTeacher", async (newTeacher) => {
    try {
        const response = await axios.post(`${API_URL}/${API_LINKS.teachers}`, newTeacher);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteTeacherById = createAsyncThunk("teachersSlice/deleteTeacherById", async (id) => {
    try {
        await axios.delete(`${API_URL}/${API_LINKS.teachers}/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
})

const emptyTeacher = {
    id: 0,
    imageUrl: "",
    "ukr": {
        teacherName: "",
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


export const teachersSlice = createSlice({
    name: 'teachersSlice',
    initialState: {
        teachers: [
            {
                id: 0,
                imageUrl: "",
                "ukr": {
                    teacherName: "",
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
        chosenTeacher: {
            id: 0,
            imageUrl: "",
            "ukr": {
                teacherName: "",
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
        },
        isTeachersLoading: false,
        isTeachersFetchError: false,
        isTeacherCreatingLoading: false,
        isTeacherCreatingError: false,
        isTeacherUpdatingLoading: false,
        isTeacherUpdatingError: false,
        isTeacherDeletingLoading: false,
        isTeacherDeletingError: false,

    },
    reducers: {
        findTeacherById: (state, action) => {
            return {
                ...state,
                chosenTeacher: state.teachers.find((teacher) => teacher.id === action.payload),
            }
        },
        resetChosenTeacher: (state) => {
            return {
                ...state,
                chosenTeacher: emptyTeacher,
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeachers.pending, (state) => {
            return {
                ...state,
                isTeachersLoading: true,
            }
        }).addCase(fetchTeachers.rejected, (state) => {
            return {
                ...state,
                isTeachersLoading: false,
                isTeachersFetchError: true,
            }
        }).addCase(fetchTeachers.fulfilled, (state, action) => {
            return {
                ...state,
                teachers: action.payload,
                isTeachersLoading: false,
                isTeachersFetchError: false,
            }
        }).addCase(updateTeacherById.pending, (state) => {
            return {
                ...state,
                isTeacherUpdatingLoading: true,
            }
        }).addCase(updateTeacherById.rejected, (state) => {
            return {
                ...state,
                isTeacherUpdatingLoading: false,
                isTeacherUpdatingError: true,
            }
        }).addCase(updateTeacherById.fulfilled, (state, action) => {
            let newTeachersArray = state.teachers.map(teacher => {
                if (teacher.id === action.payload.id) {
                    return action.payload
                }
                return teacher;
            })

            return {
                ...state,
                teachers: newTeachersArray,
                isTeacherUpdatingLoading: false,
                isTeacherUpdatingError: false,
            }
        }).addCase(createTeacher.pending, (state) => {
            return {
                ...state,
                isTeacherCreatingLoading: true,
            }
        }).addCase(createTeacher.rejected, (state) => {
            return {
                ...state,
                isTeacherCreatingLoading: false,
                isTeacherCreatingError: true,
            }
        }).addCase(createTeacher.fulfilled, (state, action) => {
            let newTeachersArray = [...state.teachers];
            newTeachersArray.push(action.payload);

            return {
                ...state,
                teachers: newTeachersArray,
                isTeacherCreatingLoading: false,
                isTeacherCreatingError: false,
            }
        }).addCase(deleteTeacherById.pending, (state) => {
            return {
                ...state,
                isTeacherDeletingLoading: true,
            }
        }).addCase(deleteTeacherById.rejected, (state) => {
            return {
                ...state,
                isTeacherDeletingLoading: false,
                isTeacherDeletingError: true,
            }
        }).addCase(deleteTeacherById.fulfilled, (state, action) => {
            let filteredTeachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
            return {
                ...state,
                teachers: filteredTeachers,
                isTeacherDeletingLoading: false,
                isTeacherDeletingError: false,
            }
        })
    }
})

export const { findTeacherById, resetChosenTeacher } = teachersSlice.actions;

export default teachersSlice.reducer