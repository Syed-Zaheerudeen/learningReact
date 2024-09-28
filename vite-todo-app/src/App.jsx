import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoContext, { TodoContextProvider } from "./context/TodoContext";
import AddBtn from "./components/addBtn";

function App() {
  const [todos, setTodos] = useState([]);

  function add(todo) {
    setTodos((prev) => [todo, ...prev]);
  }

  function remove(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items"));
    if (data != null && data.length > 0) setTodos(data);
  }, []);

  useEffect(() => {
    if (todos.length > 0 || JSON.parse(localStorage.getItem("items")) != null) {
      localStorage.setItem("items", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, add, remove }}>
      <div className=" h-screen bg-neutral-800 flex flex-col items-center">
        <AddBtn />

        {todos.map((todo) => (
          <div key={todo.id} className="w-2/4 max-w-[800px] h-16 mt-8">
            {" "}
            <TodoItem curr={todo} />{" "}
          </div>
        ))}
      </div>
    </TodoContextProvider>
  );
}

export default App;
