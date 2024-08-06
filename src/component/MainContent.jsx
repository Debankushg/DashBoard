import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
// import Settings from './Settings';
// import Logout from './Logout';

const MainContent = () => {
  return (
    <main className="flex-1 bg-gray-700 text-white p-6 overflow-y-auto">
      <Routes>
        <Route path="/" element={<h2 className="text-xl font-bold mb-4"><Home /></h2>} />
        <Route path="/profile" element={<h2 className="text-xl font-bold mb-4"><Profile /></h2>} />
        <Route path="/settings" element={<h2 className="text-xl font-bold mb-4">Settings</h2>} />
        <Route path="/clipboard" element={<h2 className="text-xl font-bold mb-4">Clipboard</h2>} />
        <Route path="/cart" element={<h2 className="text-xl font-bold mb-4">Cart</h2>} />
      </Routes>
      {/* Add more content to test scrolling */}
      {/* <div style={{ height: '0px' }}></div> */}
    </main>
  );
};

export default MainContent;
