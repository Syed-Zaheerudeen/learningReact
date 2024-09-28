import { useContext, useEffect, useState } from "react";
import useTodo from "../context/TodoContext";

const TodoItem = ({curr}) => {
  let { remove,todos } = useTodo();   
  const [edit, setEdit] = useState(true); 
  const [taskStatus,setTaskStatus] = useState(curr.completed); 
  const [task,setTask] =useState(curr.task);

  useEffect(() => {
     curr.completed = taskStatus
     localStorage.setItem("items",JSON.stringify(todos)) 
  }, [task,taskStatus])

  

  return (
    <>
      <div
        className={`w-full p-2 max-w-[800px] h-16 flex justify-between items-center ${
          taskStatus ? " bg-red-600 " : " bg-emerald-600 "
        }`}
      >

        <div className="w-3/4 flex  items-center">

          <input
            type="checkbox"
            checked={taskStatus}
            onChange={() => (setTaskStatus((p) => !p))}
            className="w-4 h-4 mx-4"
          />

          <input
            type="text"
            name="edit-text"
            readOnly={edit}
            onChange={(e) => (setTask(e.target.value),curr.task = e.target.value)}
            value={task}
            className={`p-1 pl-3 border-solid border-gray-900 outline-none rounded-l text-2xl text-emerald-200 font-bold decoration-4  decoration-black ${taskStatus ? " bg-red-600 line-through " : " bg-emerald-600 "} ${!edit? " border-2 " : ""}`}
          />

        </div>

       <div className="w-1/4 flex items-center justify-around">

       <button
          onClick={() => setEdit(!edit)}
          className="p-2 bg-gray-900 font-bold text-emerald-50 rounded"
        >
          {!edit ? "save" : "edit"}
        </button>

        <button
          onClick={() => remove(curr.id)}
          className="p-2 bg-gray-900 font-bold text-emerald-50 rounded"
        >
          delete
        </button>

       </div>

      </div>
    </>
  );
};

export default TodoItem;
