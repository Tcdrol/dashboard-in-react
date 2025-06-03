import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import UserCard from '../components/UserCard';
import RecentActivity from '../components/RecentActivity';
import SystemStatus from '../components/SystemStatus';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <UserCard 
                name="MUKALE MIRRIAM MOONDE"
                role="Administrator"
                email="mukale.mirriam.monde@example.com"
              />
            </div>
            <div>
              <SystemStatus />
            </div>
          </div>
          
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Total Users', value: '1,234', change: '+12%' },
                  { title: 'Active Sessions', value: '89', change: '+5%' },
                  { title: 'Tasks Completed', value: '256', change: '+23%' },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <div className="flex items-end justify-between mt-2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-green-500">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
