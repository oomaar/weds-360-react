import { configureStore } from '@reduxjs/toolkit';
import showsReducer from "../Components/Navbar/showsSlice";
import categoriesReducer from "../Components/Categories/categoriesSlice";

export default configureStore({
    reducer: {
        shows: showsReducer,
        cats: categoriesReducer,
    },
});