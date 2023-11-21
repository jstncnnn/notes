import React from "react";
import "./Header.css";

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <label class="switch">
        <input
          type="checkbox"
          onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default Header;
