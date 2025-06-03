import React from 'react';

interface StatusItem {
  name: string;
  status: 'online' | 'warning' | 'error';
  message: string;
}

const SystemStatus = () => {
  const statusItems: StatusItem[] = [
    { name: 'Web Server', status: 'online', message: 'Running smoothly' },
    { name: 'Database', status: 'online', message: 'Connection stable' },
    { name: 'API', status: 'warning', message: 'High response time' },
    { name: 'Storage', status: 'online', message: '65% used' },
  ];

  const statusColors = {
    online: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">System Status</h2>
      <div className="space-y-3">
        {statusItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${statusColors[item.status]}`}></div>
              <span>{item.name}</span>
            </div>
            <span className="text-sm text-gray-500">{item.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;
