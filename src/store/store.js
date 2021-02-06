import { configureStore } from '@reduxjs/toolkit';
import showsReducer from "../Components/Navbar/showsSlice";

export default configureStore({
    reducer: {
        shows: showsReducer,
    },
});