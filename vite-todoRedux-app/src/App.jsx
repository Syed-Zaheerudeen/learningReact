import React, { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import AddBtn from "./components/AddBtn";
import TodoItem from "./components/TodoItem";
import { initializeState } from "./store/TodoSlice";

function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if(items != null && items.length > 0) dispatch(initializeState(items));
    
  }, [])

  useEffect(() => {
    
    if(todos.length > 0 || JSON.parse(localStorage.getItem("items")) != null) localStorage.setItem("items",JSON.stringify(todos));
    
  }, [todos])
  

  return (
    
    <div className=" flex flex-col justify-center items-center">
      <h1 className=" mt-5 font-extrabold text-center text-3xl text-emerald-500">   Redux Todo App </h1>
      
       <AddBtn />

       {
        todos.map((todo) => (
           <div key={todo.id} className="w-2/4">
              <TodoItem curr={todo} />
           </div>
        ))
       }


    </div>
  )
}

export default App
