import { useState } from "react";
import useTodo from "../context/TodoContext";

export default function AddBtn() {
  const [newTask, setNewTask] = useState("");
  const { add } = useTodo();

  return (
    <div className="w-2/4 max-w-[800px] h-16 mt-16 flex justify-center items-center">
      <input
        type="text"
        className="w-4/5 h-full p-3 border-none outline-none bg-neutral-600 rounded-l text-2xl text-emerald-400 "
        placeholder="Type Here"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        className="w-1/5 h-full border-none outline-none bg-emerald-600 rounded-r text-2xl text-emerald-50 "
        onClick={() => add({ id: Date.now(), task: newTask, completed: false },setNewTask(""))}
      >
        Add
      </button>
    </div>
  );
}


