import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import UserCard from '../components/UserCard';
import RecentActivity from '../components/RecentActivity';
import SystemStatus from '../components/SystemStatus';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%' },
    { title: 'Active Sessions', value: '89', change: '+5%' },
    { title: 'Tasks Completed', value: '256', change: '+23%' },
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="dashboard-main">
          <div className="dashboard-top">
            <div className="user-card-wrapper">
              <UserCard 
                name="MIRRIAM MOONDE"
                role="Administrator"
                email="mukale.mirriam.monde@example.com"
              />
            </div>
            <div className="system-status-wrapper">
              <SystemStatus />
            </div>
          </div>
          
          <div className="quick-stats">
            <div className="quick-stats-container">
              <h2 className="quick-stats-title">Quick Stats</h2>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <p className="stat-title">{stat.title}</p>
                    <div className="stat-value">
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-change">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-sidebar">
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
