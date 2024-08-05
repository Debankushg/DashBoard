import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import MainContent from '../component/MainContent';
import Header from './Header';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-900">
        <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <MainContent />
        </div>
      </div>
  );
};

export default Dashboard;
