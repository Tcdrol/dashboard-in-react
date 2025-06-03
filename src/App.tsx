import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<div className="p-6">Users Page</div>} />
          <Route path="/analytics" element={<div className="p-6">Analytics Page</div>} />
          <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
