// Import necessary modules and types
import React, { createContext, useContext, useState } from "react";

// Create a context for managing the active section
const ActiveSectionContext = createContext(null);

// Define the context provider component
const ActiveSectionContextProvider = ({ children }) => {
  // Initialize state for activeSection and timeOfLastClick
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Custom hook to access the active section context
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

// Export the context provider as the default export
export default ActiveSectionContextProvider;
