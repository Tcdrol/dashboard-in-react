import React, { useState } from 'react';
import { format, addMonths, parseISO } from 'date-fns';
import DashboardLayout from '../components/DashboardLayout';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({ 
    title: '', 
    date: new Date(),
    time: '12:00'
  });

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const navigateToPrev = () => {
    setCurrentDate(prevDate => addMonths(prevDate, -1));
  };

  const navigateToNext = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const newEventWithId = {
      ...newEvent,
      id: events.length + 1,
    };
    setEvents([...events, newEventWithId]);
    setNewEvent({ title: '', date: new Date(), time: '12:00' });
    setShowEventForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: name === 'title' ? value : 
              name === 'date' ? parseISO(value) :
              value
    });
  };
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Calendar</h1>
          <button 
            onClick={() => setShowEventForm(!showEventForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showEventForm ? 'Hide Form' : 'Add Event'}
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="h-[600px] flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Calendar View</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  A full calendar view will be displayed here with all your events and appointments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button 
                  onClick={navigateToToday}
                  className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 rounded-md border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                >
                  Today
                </button>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={navigateToPrev}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Previous month"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={navigateToNext}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Next month"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {format(currentDate, 'MMMM yyyy')}
                </span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setView('day')}
                  className={`px-3 py-1 text-sm font-medium rounded-md border ${
                    view === 'day' 
                      ? 'bg-blue-600 text-white border-transparent' 
                      : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                  }`}
                >
                  Day
                </button>
                <button 
                  onClick={() => setView('week')}
                  className={`px-3 py-1 text-sm font-medium rounded-md border ${
                    view === 'week' 
                      ? 'bg-blue-600 text-white border-transparent' 
                      : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                  }`}
                >
                  Week
                </button>
                <button 
                  onClick={() => setView('month')}
                  className={`px-3 py-1 text-sm font-medium rounded-md border ${
                    view === 'month' 
                      ? 'bg-blue-600 text-white border-transparent' 
                      : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                  }`}
                >
                  Month
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((event) => (
                <div key={event} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">
                      {event}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Team Meeting {event}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {event === 1 ? 'Today, 2:00 PM' : `Jun ${event + 10}, 10:00 AM`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Add</h3>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  id="event-title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter event title"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    name="date"
                    value={newEvent.date ? format(newEvent.date, 'yyyy-MM-dd') : ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="event-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="event-time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
