import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
  <h2 className="text-2xl font-bold text-center mb-4">Todo App</h2>

  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Enter task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={addTodo}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Add
    </button>
  </div>

  <ul className="space-y-2">
    {todos.map((todo, index) => (
      <li
        key={index}
        className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
      >
        <span>{todo}</span>

        <button
          onClick={() => deleteTodo(index)}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}

export default TodoApp;
