import React from 'react';
import './Home.css';
import Header from './Header';
import Card from './Card';

const Home = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="cards-container">
        <Card title="Total Tasks" value="45" />
        <Card title="Completed" value="30" />
        <Card title="In Progress" value="15" />
      </div>
      <div className="dashboard-section">
        <h2>Task Overview</h2>
        <div className="placeholder">
          Chart or Table goes here
        </div>
      </div>
    </div>
  );
};

export default Home;
