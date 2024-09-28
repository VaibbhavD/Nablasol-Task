import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "../../Context/Task1";
import Navigation from "../../components/Navigation";

const Step1 = ({ onNext, Step, onBack }) => {
  const { formData, updateFormData } = useFormContext();
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.projectName)
      newErrors.projectName = "Project name is required.";
    if (!formData.client) newErrors.client = "Client is required.";
    if (formData.newClients.length > 0) {
      formData.newClients.forEach((client, index) => {
        if (!client) {
          newErrors[`newClient${index}`] = `Client ${index + 1} is required.`;
        }
      });
    }
    if (!formData.startDate) newErrors.startDate = "Start date is required.";
    if (!formData.endDate) newErrors.endDate = "End date is required.";
    if (!formData.notes) newErrors.notes = "Notes are required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      console.log(formData);
    }
    onNext();
  };

  const handleAddClient = () => {
    if (formData.newClients.length < 3) {
      updateFormData("newClients", [...formData.newClients, ""]);
    }
  };

  const handleNewClientChange = (index, value) => {
    const updatedClients = [...formData.newClients];
    updatedClients[index] = value;
    updateFormData("newClients", updatedClients);
  };

  const handleDeleteClient = (index) => {
    const updatedClients = formData.newClients.filter((_, i) => i !== index);
    updateFormData("newClients", updatedClients);
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
            className={`w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
              errors.projectName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter project name here"
            value={formData.projectName}
            onChange={(e) => updateFormData("projectName", e.target.value)}
          />
          {errors.projectName && (
            <p className="text-red-500 text-sm">{errors.projectName}</p>
          )}
        </div>

        {/* Client Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Client</label>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <select
              className={`w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.client ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.client}
              onChange={(e) => updateFormData("client", e.target.value)}
            >
              <option value="">Select a client</option>
              <option value="Client 1">Client 1</option>
              <option value="Client 2">Client 2</option>
            </select>
            <button
              className="mt-2 sm:mt-0 text-blue-600 font-medium hover:text-blue-800 disabled:opacity-50"
              onClick={handleAddClient}
              disabled={formData.newClients.length >= 3}
            >
              + New Client
            </button>
          </div>
          {errors.client && (
            <p className="text-red-500 text-sm">{errors.client}</p>
          )}

          {/* Render New Client Input Fields */}
          {formData.newClients.map((client, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="text"
                className={`w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
                  errors[`newClient${index}`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
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
              {errors[`newClient${index}`] && (
                <p className="text-red-500 text-sm">
                  {errors[`newClient${index}`]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Dates</label>
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <input
              type="date"
              className={`w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.startDate ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.startDate}
              onChange={(e) => updateFormData("startDate", e.target.value)}
            />
            <input
              type="date"
              className={`w-full mt-2 sm:mt-0 border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.endDate ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.endDate}
              onChange={(e) => updateFormData("endDate", e.target.value)}
            />
          </div>
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate}</p>
          )}
          {errors.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate}</p>
          )}
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Notes</label>
          <textarea
            className={`w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200`}
            rows="3"
            placeholder="Optional"
            value={formData.notes}
            onChange={(e) => updateFormData("notes", e.target.value)}
          ></textarea>
        </div>

        {/* Navigation Buttons */}
        <Navigation onNext={handleNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step1;
