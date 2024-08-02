import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
// import Settings from './Settings';
// import Logout from './Logout';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-[#141316] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </div>
  );
};

export default MainContent;
