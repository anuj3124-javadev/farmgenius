import React from 'react';
import '../styles.css';
import Header from './Header';
import Sidebar from './Sidebar';

const Home = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="container">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="content">
            <section className="section">
            <h2>Crop's Market</h2>
            <div className="graph">
              <p>Graph Placeholder</p>
            </div>
            <div className="more-crops">
              <p>More Crops</p>
            </div>
          </section>

          <section className="section">
            <h2>Weather Reports</h2>
            <div className="weather">
              <p>Weather Data Placeholder</p>
            </div>
          </section>

          <section className="section">
            <h2>Services</h2>
            <div className="services">
              <div className="service">Service 1</div>
              <div className="service">Service 2</div>
              <div className="service">Service 3</div>
            </div>
          </section>

          <section className="section">
            <h2>Govt. Policy & Scheme</h2>
            <div className="policies-schemes">
              <div className="policies">Policies</div>
              <div className="schemes">Schemes</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
