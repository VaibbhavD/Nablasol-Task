import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Step1 = () => {
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [newClients, setNewClients] = useState([]);

  const handleNext = () => {
    console.log({
      projectName,
      client,
      newClients,
      startDate,
      endDate,
      notes,
    });
  };

  const handleAddClient = () => {
    if (newClients.length < 3) {
      setNewClients([...newClients, ""]);
    }
  };

  const handleNewClientChange = (index, value) => {
    const updatedClients = [...newClients];
    updatedClients[index] = value;
    setNewClients(updatedClients);
  };

  const handleDeleteClient = (index) => {
    const updatedClients = newClients.filter((_, i) => i !== index);
    setNewClients(updatedClients);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-full sm:max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6">
          Create a Project
        </h2>

        {/* Project Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter project name here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        {/* Client Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Client</label>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <select
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            >
              <option value="">Select a client</option>
              <option value="Client 1">Client 1</option>
              <option value="Client 2">Client 2</option>
            </select>
            <button
              className="mt-2 sm:mt-0 text-blue-600 font-medium hover:text-blue-800 disabled:opacity-50"
              onClick={handleAddClient}
              disabled={newClients.length >= 3}
            >
              + New Client
            </button>
          </div>

          {/* Render New Client Input Fields */}
          {newClients.map((client, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder={`New Client ${index + 1}`}
                value={client}
                onChange={(e) => handleNewClientChange(index, e.target.value)}
              />
              <button
                onClick={() => handleDeleteClient(index)}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Dates</label>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="w-full mt-2 sm:mt-0 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Notes</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            rows="3"
            placeholder="Optional"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Back
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-2 w-2 rounded-full ${
                step === 1 ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
