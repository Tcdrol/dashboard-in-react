import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Mock data for charts
const stats = [
  { name: 'Total Users', value: '2,345', change: '+12.5%', changeType: 'increase' },
  { name: 'Active Sessions', value: '1,234', change: '+5.2%', changeType: 'increase' },
  { name: 'Bounce Rate', value: '32.1%', change: '-2.3%', changeType: 'decrease' },
  { name: 'Avg. Session', value: '4m 32s', change: '+0.8%', changeType: 'increase' },
];

// Chart options
const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        color: 'var(--color-text)',
        font: {
          size: 14,
        },
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          const label = context.label || '';
          const value = context.raw || 0;
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
};

// Data for pie charts
const deviceData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      data: [65, 25, 10],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(16, 185, 129, 0.8)',
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(16, 185, 129, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const trafficData = {
  labels: ['Direct', 'Referral', 'Social', 'Email', 'Organic'],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(59, 130, 246, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
};

const osData = {
  labels: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Other'],
  datasets: [
    {
      data: [40, 30, 10, 10, 8, 2],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(107, 114, 128, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(249, 115, 22, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
};

// Mock data for line chart
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Users',
      data: [400, 300, 600, 500, 800, 1000],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Mock data for bar chart
const barChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Page Views',
      data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 1,
    },
  ],
};

const Analytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Analytics Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  stat.changeType === 'increase' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pie Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Device Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Device Distribution</h3>
            <div className="h-80 flex items-center justify-center">
              <Pie data={deviceData} options={{
                ...pieChartOptions,
                plugins: {
                  ...pieChartOptions.plugins,
                  title: {
                    display: true,
                    text: 'By Device Type',
                    color: 'var(--color-text)',
                    font: { size: 16 }
                  },
                },
              }} />
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
            <div className="h-80 flex items-center justify-center">
              <Pie data={trafficData} options={{
                ...pieChartOptions,
                plugins: {
                  ...pieChartOptions.plugins,
                  title: {
                    display: true,
                    text: 'By Traffic Source',
                    color: 'var(--color-text)',
                    font: { size: 16 }
                  },
                },
              }} />
            </div>
          </div>
        </div>

        {/* OS Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Operating Systems</h3>
          <div className="h-96">
            <Pie data={osData} options={{
              ...pieChartOptions,
              plugins: {
                ...pieChartOptions.plugins,
                legend: {
                  ...pieChartOptions.plugins?.legend,
                  position: 'right',
                },
                title: {
                  display: true,
                  text: 'By Operating System',
                  color: 'var(--color-text)',
                  font: { size: 16 }
                },
              },
            }} />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">U{item}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">User {item} performed an action</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
