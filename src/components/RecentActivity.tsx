import React from 'react';

interface ActivityItem {
  id: number;
  action: string;
  timestamp: string;
  user: string;
}

const RecentActivity = () => {
  const activities: ActivityItem[] = [
    { id: 1, action: 'Created new project', timestamp: '2 hours ago', user: 'John Doe' },
    { id: 2, action: 'Updated user settings', timestamp: '5 hours ago', user: 'Jane Smith' },
    { id: 3, action: 'Deleted old records', timestamp: '1 day ago', user: 'John Doe' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b pb-2 last:border-0 last:pb-0">
            <p className="text-sm">
              <span className="font-medium">{activity.user}</span> {activity.action}
            </p>
            <p className="text-xs text-gray-500">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
