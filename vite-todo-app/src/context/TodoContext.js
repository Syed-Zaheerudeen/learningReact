import { createContext, useContext } from "react";


export const TodoContext = createContext([]);

export const TodoContextProvider= TodoContext.Provider;

function useTodo() {
    return useContext(TodoContext);
}


export default useTodo;