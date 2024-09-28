import React, { useState } from "react";

const steps = [
  { id: 1, label: "Your Profile" },
  { id: 2, label: "Business Information" },
  { id: 3, label: "Additional Users" },
];

function StepNav() {
  const [currentStep, setCurrentStep] = useState(2); // Example, current step is 2

  return (
    <div className=" flex justify-center">
      <div className="flex justify-center mt-8 items-center bg-gray-200">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`py-6 px-6 transition-all w-80 duration-300 ${
              currentStep >= step.id
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-500"
            } ${step.id === 2 ? "rounded-r-full" : ""}`}
          >
            <span
              className={`p-1 px-2.5 rounded-full text-lg font-bold ${
                currentStep >= step.id
                  ? "bg-white text-black"
                  : "bg-gray-300 text-white"
              }`}
            >
              {step.id}
            </span>
            <span className="ml-2">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepNav;
