import React, { useState } from 'react';
import Home from './components/Home';
import './styles.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  );
}

export default App;
