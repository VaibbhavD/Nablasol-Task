import React, { useState } from "react";

const TaskManager = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Marketing Website Design", completed: false },
    { id: 2, name: "Branding Design", completed: false },
    { id: 3, name: "UI/UX Fundamentals", completed: true },
    { id: 4, name: "Wireframe and Prototyping", completed: false },
    { id: 5, name: "Style Guide", completed: false },
    { id: 6, name: "UX Research and Flows", completed: false },
    { id: 7, name: "Layout design", completed: false },
  ]);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, name: taskInput, completed: false },
      ]);
      setTaskInput("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-full md:h-[600px] sm:max-w-md w-full">
        <h2 className="text-center text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
          Tasks
        </h2>

        {/* Add Task Input */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Add task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 sm:px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2 overflow-y-auto min-h-[300px] ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center space-x-2 p-2 border rounded"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="h-4 w-4"
              />
              <span
                className={`flex-grow text-sm sm:text-base text-gray-800 ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.name}
              </span>
              <button
                className="text-red-600"
                onClick={() => handleDeleteTask(task.id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-blue-600 font-medium">Back</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
