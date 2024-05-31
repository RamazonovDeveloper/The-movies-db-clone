import React, { useState } from "react";
import "./toggleBtn.css";

const ToggleButton = () => {
  const [active, setActive] = useState("today");

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div className="toggle-container">
      <button
        className={`toggle-btn ${active === "today" ? "active" : ""}`}
        onClick={() => handleToggle("today")}
      >
        Today
      </button>
      <button
        className={`toggle-btn ${active === "this-week" ? "active" : ""}`}
        onClick={() => handleToggle("this-week")}
      >
        This Week
      </button>
    </div>
  );
};

export default ToggleButton;
