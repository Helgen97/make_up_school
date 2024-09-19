import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slicers/contactsSlicer';
import albumsReducer from "./slicers/albumsSlicer";
import albumReducer from './slicers/albumSlicer';
import teacherReducer from "./slicers/teacherSlicer";
import schoolDescriptionReducer from "./slicers/schoolDescriptionSlicer"
import mainDescriptionReducer from "./slicers/mainDescriptionSlicer";
import coursesReducer from './slicers/coursesSlicer';

export default configureStore({
    reducer: {
        contacts: contactsReducer,
        albums: albumsReducer,
        album: albumReducer,
        teachers: teacherReducer,
        schoolDescription: schoolDescriptionReducer,
        mainDescription: mainDescriptionReducer,
        courses: coursesReducer
    },
})