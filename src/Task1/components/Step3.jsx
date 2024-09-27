import React, { useState } from "react";

const Step3 = ({ onNext, onBack }) => {
  const [selectedView, setSelectedView] = useState("board");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md lg:h-[600px] h-[500px] flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-center mb-4">Select a View</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            You can also customize this view in settings.
          </p>

          {/* Options for List and Board View */}
          <div className="flex justify-around mb-6 gap-2">
            {["list", "board"].map((view) => (
              <div
                key={view}
                className={`w-1/2 flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${
                  selectedView === view
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-gray-100"
                }`}
                onClick={() => setSelectedView(view)}
              >
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mb-2">
                  {/* Placeholder for List/Board Icon */}
                  {view === "list" ? (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h5v12H4zm6 0h5v12h-5zm6 0h5v12h-5z"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-gray-700">
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className="text-blue-500 text-sm flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <button
            onClick={onNext}
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
