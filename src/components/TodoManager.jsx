import React from 'react';
import TodoList from './TodoList';
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoManager() {
  const {todos,addTodo}=useTodo();
  const [newTodo,setNewTodo] = useState("");

  const handleAddButton=()=>{
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <div className="m-0 p-0 box-border font-sans">
      <div className="bg-gray-900 text-white min-h-screen min-w-full flex justify-center items-center">
        <div className="p-5 rounded-md bg-gray-800 shadow-md flex flex-col gap-2.5">
          <h1 className="text-center text-2xl">Manage your TODO's</h1>
          <div className="grid grid-cols-[3fr_1fr] gap-2.5">
            <input
              type="text"
              id="todo-input"
              placeholder="Write your todo..."
              className="p-2.5 rounded-md border-none bg-gray-700 text-white text-base focus:outline-none"
              value={newTodo}
              onChange={(e)=>(setNewTodo(e.target.value))}
            />
            <button
              id="add-btn"
              className="bg-purple-700 border-none text-white text-base rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out"
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
          {todos.map((t)=>(<TodoList key={t.id} todo={t}/>))}
        </div>
      </div>
    </div>
  );
}

export default TodoManager