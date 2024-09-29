import React from "react";
import ProfileForm from "./components/ProfileForm";
import BusinessInfo from "./components/BusinessInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import { useFormContext } from "../Context/Task1";
import { useNavigate } from "react-router";

function Index() {
  const { currentStep, setCurrentStep } = useFormContext();
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url('https://wallpaperaccess.com/full/4893794.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Overlay with Blur Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(8px)", // Adjust the blur amount here
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Optional: add a semi-transparent color
        }}
      />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h3 className="text-center text-3xl text-white">Create New Account</h3>

        {currentStep == 1 && <ProfileForm />}
        {currentStep == 2 && <BusinessInfo />}
        {currentStep == 3 && <AdditionalInfo />}
        <div className="flex justify-between md:px-56 text-white mt-4 text-sm md:text-base">
          {currentStep != 1 && (
            <button
              type="button"
              className="p-2 px-6 bg-blue-500 rounded-lg"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              Back
            </button>
          )}
          {currentStep == 1 && (
            <button
              type="button"
              className="p-2 px-6 bg-blue-500 rounded-lg"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          )}
          <button
            type="button"
            className={`p-2 px-6 bg-blue-500 rounded-lg ${
              currentStep == 3 ? "invisible" : ""
            }`}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
