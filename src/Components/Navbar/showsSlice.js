import { createSlice } from '@reduxjs/toolkit';

export const showsSlice = createSlice({
    name: 'shows',
    initialState: {
        shows: false,
    },
    reducers: {
        setShow: state => {
            state.shows = !state.shows;
        }
    },
});

export const { setShow } = showsSlice.actions;

export const selectShows = state => state.shows;

export default showsSlice.reducer;