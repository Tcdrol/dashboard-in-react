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
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="recent-activity-title">Recent Activity</h2>
      <div className="recent-activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-content">
              <span className="activity-user">{activity.user}</span>
              {activity.action}
            </div>
            <p className="activity-timestamp">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
