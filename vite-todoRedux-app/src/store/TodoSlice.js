import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = { 
    todos: []
}


export const TodoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
               id: nanoid(),
               task: action.payload
            }
       
            state.todos.push(todo);
       },
       
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        
        updateTodo: (state,action) => {            
            for (let index = 0; index < state.todos.length; index++) {
                const todo = state.todos[index];
                if(todo.id === action.payload) {
                    todo.task = action.payload;
                }
            }
        },

        initializeState: (state,action) => {
            state.todos = action.payload
        }
        
    }
})

export const { addTodo, removeTodo, updateTodo, initializeState } = TodoSlice.actions

export const todoReducers = TodoSlice.reducer;

export default TodoSlice;