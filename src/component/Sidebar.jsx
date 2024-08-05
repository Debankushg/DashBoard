import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { FaDiceFour } from "react-icons/fa";

const Sidebar = ({toggleSidebar}) => {
  return (
    <div className="h-screen sm-h-[297%] w-64 md:w-14 bg-[#1F2029] text-white flex flex-col">
      <div className="text-center mt-4">
        <FaDiceFour size={24} className="mx-auto" />
      </div>
      <ul className="mt-10 flex flex-col items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
          onClick={toggleSidebar}
        >
          <MdHome size={24} />
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
          onClick={toggleSidebar}
        >
          <BsFileBarGraph size={24} />
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
          onClick={toggleSidebar}
        >
          <LuClipboardCheck size={24} />
        </NavLink>
        <NavLink 
          to="/clipboard" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
          onClick={toggleSidebar}
        >
          <CiWallet size={24} />
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            `relative px-4 py-2 hover:bg-gray-700 flex justify-center items-center ${isActive ? 'text-blue-500' : 'text-white'}`
          }
          onClick={toggleSidebar}
        >
          <BsClipboardCheck size={24} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
