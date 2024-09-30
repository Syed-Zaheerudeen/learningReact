import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "../store/TodoSlice";


const TodoStore = configureStore({
    reducer: todoReducers
})

export default TodoStore;