import { React } from "react";
import { useState,useEffect } from "react";
import {useDispatch} from "react-redux";
import {removeTodo,updateTodo} from "../store/TodoSlice"

export default function TodoItem({curr}) {
  const [edit, setEdit] = useState(true);
  const [task, setTask] = useState(curr.task);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

   return (
    <>
      <div
        className={`w-full p-2 mt-3 max-w-[800px] h-16 flex justify-between items-center bg-emerald-600`}
      >
        <div className="w-3/4 flex  items-center">
          <input
            type="text"
            name="edit-text"
            readOnly={edit}
            onChange={(e) => (
              setTask(e.target.value)
            )}
            value={task}
            className={`p-1 pl-3 border-solid border-gray-900 outline-none rounded-l text-2xl text-emerald-200 font-bold decoration-4  decoration-black bg-emerald-600  ${
              !edit ? " border-2 " : ""
            }`}
          />
        </div>

        <div className="w-1/4 flex items-center justify-around">
          <button
            onClick={() => (setEdit(!edit),dispatch(updateTodo(task,curr.id)))}
            className="p-2 bg-gray-900 font-bold text-emerald-50 rounded"
          >
            {!edit ? "save" : "edit"}
          </button>

          <button
            onClick={() => (dispatch(removeTodo(curr.id)))}
            className="p-2 bg-gray-900 font-bold text-emerald-50 rounded"
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}
