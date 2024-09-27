import React, { useState } from "react";

const Step2 = ({ onNext, onBack }) => {
  const [selectedTab, setSelectedTab] = useState("time_and_materials");
  const [hourlyRate, setHourlyRate] = useState("12678.00");
  const [budgetAlert, setBudgetAlert] = useState("80");
  const [budgetResets, setBudgetResets] = useState(false);
  const [sendEmailAlert, setSendEmailAlert] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Project Type</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don’t panic — You can also customize this type in settings.
        </p>

        {/* Tabs for Project Types */}
        <div className="flex flex-col sm:flex-row justify-around mb-6">
          {["time_and_materials", "fixed_fee", "non_billable"].map((tab) => (
            <button
              key={tab}
              className={`w-full sm:w-1/3 py-2 rounded mb-2 sm:mb-0 ${
                selectedTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Form Section */}
        <div>
          {/* Hourly Rate Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Hourly Rate
            </label>
            <p className="text-sm text-gray-500 mb-2">
              We need hourly rates to track your project's billable amount.
            </p>
            <div className="flex flex-col sm:flex-row items-center w-full">
              <select className="border border-gray-300 rounded-l p-2 mb-2 sm:mb-0 sm:mr-2 w-full md:w-1/2 focus:outline-none focus:ring focus:ring-blue-200">
                <option>Project Hourly Rate</option>
              </select>
              <input
                type="text"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full md:w-1/4 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Budget Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Budget</label>
            <p className="text-sm text-gray-500 mb-2">
              We need hourly rates to track your project's billable amount.
            </p>
            <select className="border border-gray-300 rounded p-2 md:w-1/2 focus:outline-none focus:ring focus:ring-blue-200">
              <option>Hours per Person</option>
              <option>Total Hours</option>
              <option>Fixed Budget</option>
            </select>
          </div>

          {/* Checkbox for Budget Resets */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={budgetResets}
                onChange={(e) => setBudgetResets(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
              />
              <span className="ml-2 text-sm text-gray-700">
                Budget resets every month
              </span>
            </label>
          </div>

          {/* Budget Alert Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              {/* Checkbox and label */}
              <label className="inline-flex items-center text-sm text-gray-700 mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200 mr-2"
                  checked={sendEmailAlert}
                  onChange={(e) => setSendEmailAlert(e.target.checked)}
                />
                <div>
                  Send email alerts if project exceeds
                  <input
                    type="text"
                    value={budgetAlert}
                    onChange={(e) => setBudgetAlert(e.target.value)}
                    className="w-16 text-center border border-gray-300 rounded p-1 mx-2 focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  <span className="text-sm ml-1"> % of budget</span>
                </div>
              </label>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button onClick={onBack} className="text-blue-500 font-medium">
              Back
            </button>
            <button
              onClick={onNext}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Next
            </button>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
