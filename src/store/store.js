import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice
        //TODO add more slices here for posts to avoid multiple web request
    }
})

export default store;