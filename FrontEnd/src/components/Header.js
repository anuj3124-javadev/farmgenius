import React from "react";
import "../styles.css";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="header">
      <button className="header-toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? "✖" : "☰"}
      </button>
      <div className="header-logo">
        <img src="logo.png" alt="logo" className="logo" />
        <span>FarmGenius</span>
      </div>
      <div className="header-icons">
        <i className="icon">🔔</i>
        <i className="icon">👤</i>
      </div>
    </header>
  );
};

export default Header;
