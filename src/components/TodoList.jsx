import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoList({ todo }) {
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className={`rounded-md p-2.5 grid grid-cols-[0.2fr_2fr_1fr_1fr] gap-2.5 ${
          todo.completed ? "bg-gray-900" : "bg-gray-700"
        }`}
      >
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <input
          className={`border text-white rounded-md p-1 bg-transparent outline-none ${
            isEditable ? "border-white" : "border-transparent" 
          } ${todo.completed? "line-through decoration-black decoration-2":""}`}
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isEditable}
        />
        <button
          className={`border-none p-2 text-sm text-white rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out ${todo.completed?"invisible":"bg-purple-700"}
          ${todoMsg===""?"invisible":""}`}
          onClick={() => {
            if (todo.completed) return;
            if (isEditable) {
              updateTodo(todo.id, todoMsg);
              setIsEditable(false);
            }else{
              setIsEditable(!isEditable)
            }
          }}
        >
          {isEditable? "Save" :"Edit"}
        </button>
        <button
          className="bg-purple-700 border-none p-2 text-sm text-white rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
