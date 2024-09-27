import React, { useState } from "react";

const Step5 = () => {
  const [taskInput, setTaskInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "Marketing Website Design", completed: false },
    { id: 2, name: "Branding Design", completed: false },
    { id: 3, name: "UI/UX Fundamentals", completed: false },
    { id: 4, name: "Wireframe and Prototyping", completed: false },
    { id: 5, name: "Style Guide", completed: false },
    { id: 6, name: "UX Research and Flows", completed: false },
    { id: 7, name: "Layout Design", completed: false },
  ]);

  const [selectedTasks, setSelectedTasks] = useState([]);
  const maxSelectedTasks = 5; // Maximum number of selected tasks allowed

  // Add task to selected tasks
  const handleAddTask = (task) => {
    if (
      !selectedTasks.some((t) => t.id === task.id) &&
      selectedTasks.length < maxSelectedTasks
    ) {
      setSelectedTasks([...selectedTasks, task]);
      setSearchQuery(""); // Clear the search query after adding
    }
  };

  // Remove task from selected tasks
  const handleRemoveTask = (task) => {
    setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id));
  };

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedTasks.some((t) => t.id === task.id)
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-full md:h-[600px] sm:max-w-md w-full">
        <h2 className="text-center text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
          Tasks
        </h2>

        {/* Add Task Input */}
        <div className="relative flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder={
                selectedTasks.length >= maxSelectedTasks
                  ? `Max ${maxSelectedTasks} tasks selected`
                  : "Search or Add a task"
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={selectedTasks.length >= maxSelectedTasks}
            />
            {/* Suggestions dropdown for filtered tasks */}
            {searchQuery && filteredTasks.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded w-full max-h-40 overflow-y-auto">
                {filteredTasks.map((task) => (
                  <li
                    key={task.id}
                    className="p-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                    onClick={() => handleAddTask(task)}
                  >
                    <span>{task.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Selected Tasks Display */}
        <div className="h-20 overflow-auto w-full flex">
          {selectedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center bg-blue-100 text-blue-800 rounded-full h-1/2 px-2 mr-2 mb-2"
            >
              <span className="text-sm">{task.name}</span>
              <button
                className="ml-2 text-blue-600 hover:text-blue-800"
                onClick={() => handleRemoveTask(task)}
              >
                &times;
              </button>
            </div>
          ))}
          {selectedTasks.length < 1 && (
            <div className="flex justify-center items-center w-full rounded-full h-1/2">
              <span className="text-md text-gray-400 flex items-center">
                Select Tasks
              </span>
            </div>
          )}
        </div>

        {/* Task List */}
        <ul className="space-y-2 overflow-y-auto h-[300px]">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center p-2 border rounded">
              <input
                type="checkbox"
                checked={selectedTasks.some((t) => t.id === task.id)}
                onChange={() => handleAddTask(task)} // Checkbox toggles task addition
                className="h-4 w-4"
                disabled={selectedTasks.length >= maxSelectedTasks}
              />
              <span
                className={`flex-grow text-sm sm:text-base ml-2 text-gray-800 ${
                  selectedTasks.some((t) => t.id === task.id)
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {task.name}
              </span>
              <button
                className="text-red-600"
                onClick={() => handleRemoveTask(task)}
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

export default Step5;
