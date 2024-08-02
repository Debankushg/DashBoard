import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { FaDiceFour } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full w-14 bg-[#1F2029] text-white flex flex-col">
      <h2 className="text-2xl font-semibold text-center mt-4 px-4">
        <FaDiceFour size={20} />
      </h2>
      <ul className="mt-10 px-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500 ' : 'text-white'}`
          }
        >
          <li className="relative flex items-center justify-center">
            <MdHome size={20} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} />
          </li>
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
        >
          <li className="relative flex items-center justify-center">
            <BsFileBarGraph size={20} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} />
          </li>
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
        >
          <li className="relative flex items-center justify-center">
            <LuClipboardCheck size={20} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} />
          </li>
        </NavLink>
        <NavLink 
          to="/clipboard" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
        >
          <li className="relative flex items-center justify-center">
            <CiWallet size={20} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} />
          </li>
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
        >
          <li className="relative flex items-center justify-center">
            <BsClipboardCheck size={20} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'} />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
