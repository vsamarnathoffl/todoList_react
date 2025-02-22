import React, { use, useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoContextProvider} from "./contexts/index.js";
import TodoManager from "./components/TodoManager.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() === "") return;
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    if(todo.trim()=== "") return;
    setTodos((prev) => prev.map((p) => (p.id === id ? { ...p, todo } : p)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleComplete = (id)=>{
    setTodos((prev)=>(prev.map((p)=>(p.id===id?{...p,completed:!p.completed}:p))))
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length>0) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <TodoManager />
    </TodoContextProvider>
  );
}

export default App;
