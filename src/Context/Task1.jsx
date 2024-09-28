import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    newClients: [],
    startDate: "",
    endDate: "",
    notes: "",
    hourlyRate: "12678.00",
    budgetAlert: "80",
    budgetResets: false,
    sendEmailAlert: false,
    selectedTab: "time_and_materials",
    selectedView: "", // Added to manage selected view in Step3
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
