import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice.js';

export default configureStore({
    reducer:{
        todo: todoReducer
    }
})