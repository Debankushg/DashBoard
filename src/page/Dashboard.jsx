import React from 'react';
import Sidebar from '../component/Sidebar';
import MainContent from '../component/MainContent';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
