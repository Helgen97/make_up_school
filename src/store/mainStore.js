import { configureStore } from '@reduxjs/toolkit';
import mainReducer from "./slices/mainDescriptionSlice"
import schoolReducer from "./slices/schoolDescriptionSlice"
import coursesReducer from "./slices/coursesSlice";
import teacherReducer from "./slices/teacherSlice";
import albumReducer from "./slices/albumsSlice";
import botSettingsReducer from "./slices/botSettingsSlice";
import passwordReducer from "./slices/passwordSlice";
import contactReducer from "./slices/contactsSlice";
import authReducer from "./slices/authSlice";

export default configureStore({
    reducer: {
        main: mainReducer,
        school: schoolReducer,
        courses: coursesReducer,
        teachers: teacherReducer,
        albums: albumReducer,
        contacts: contactReducer,
        botSettings: botSettingsReducer,
        passwordSettings: passwordReducer,
        auth: authReducer,
    }
})