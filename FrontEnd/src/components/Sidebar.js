import React from 'react';
import '../styles.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
      <ul className="menu">
        <li className="menu-item">
          <i className="icon">🏠</i>
          {isSidebarOpen && <span>Home</span>}
        </li>
        <li className="menu-item">
          <i className="icon">🌾</i>
          {isSidebarOpen && <span>Crop Market</span>}
        </li>
        <li className="menu-item">
          <i className="icon">📜</i>
          {isSidebarOpen && <span>Govt. Policies</span>}
        </li>
        <li className="menu-item">
          <i className="icon">⚙️</i>
          {isSidebarOpen && <span>Services</span>}
        </li>
        <li className="menu-item">
          <i className="icon">📞</i>
          {isSidebarOpen && <span>Contact</span>}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
