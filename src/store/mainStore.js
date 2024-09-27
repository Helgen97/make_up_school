import { configureStore } from '@reduxjs/toolkit';
import mainReducer from "./slices/mainDescriptionSlice"
import schoolReducer from "./slices/schoolDescriptionSlice"
import coursesReducer from "./slices/coursesSlice";
import teacherReducer from "./slices/teacherSlice";
import albumReducer from "./slices/albumsSlice"

export default configureStore({
    reducer: {
        main: mainReducer,
        school: schoolReducer,
        courses: coursesReducer,
        teachers: teacherReducer,
        albums: albumReducer,
    }
})