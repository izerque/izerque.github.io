import React, { useState } from "react";

function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Additional code to toggle dark/light mode
  };

  return (
    <button onClick={handleModeToggle}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default Darkmode;
