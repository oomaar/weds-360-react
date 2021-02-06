import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: false,
    },
    reducers: {
        setCats: state => {
            state.cats = !state.cats;
        }
    },
});

export const { setCats } = categoriesSlice.actions;

export const selectCats = state => state.cats;

export default categoriesSlice.reducer;