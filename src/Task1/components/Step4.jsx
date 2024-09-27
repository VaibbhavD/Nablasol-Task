import React, { useState } from "react";

const Step4 = ({ onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState("admins");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-full sm:max-w-md w-full">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6">
          Who can manage projects
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Don’t panic — You can also customize these permissions in settings.
        </p>
        <div className="space-y-4">
          {/* Option 1 */}
          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOption === "everyone"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleOptionChange("everyone")}
          >
            <h3 className="font-medium text-gray-800">Everyone</h3>
            <p className="text-gray-500">
              All users can see it, but guests cannot access the projects.
            </p>
          </div>

          {/* Option 2 */}
          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOption === "admins"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleOptionChange("admins")}
          >
            <h3 className="font-medium text-gray-800">Only Admins</h3>
            <p className="text-gray-500">Only admins can manage everything.</p>
          </div>

          {/* Option 3 */}
          <div
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOption === "specific"
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handleOptionChange("specific")}
          >
            <h3 className="font-medium text-gray-800">Only Specific People</h3>
            <p className="text-gray-500">
              Only some specific people can see it.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={onBack} className="text-blue-500 font-medium">
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
