import { createSlice } from "@reduxjs/toolkit";


const localFromStorage = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
}


export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        value: localFromStorage(),
    },
    reducers: {
        addTodo : (state, action) => {
            state.value.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
            localStorage.setItem("todos",JSON.stringify(state.value));
        },
        removeTodo: (state,action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos",JSON.stringify(state.value));
        },
        completeTodo: (state,action) => {
            state.value = state.value.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo);
            localStorage.setItem("todos",JSON.stringify(state.value));
        }
    }
});

export const {addTodo, removeTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;