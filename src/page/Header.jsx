import React from 'react';
import { CiMail, CiSettings, CiSearch } from "react-icons/ci";
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = ({toggleSidebar}) => {
  return (
    <div className="bg-[#1F2029] text-white py-4 px-6">
    <div className='flex justify-between items-center flex-wrap'>
      <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
        <FaBars size={24} />
      </button>
      <div className="flex items-center bg-[#292B2f] px-2 py-1 rounded-md w-full md:w-auto mt-2 md:mt-0">
        <CiSearch size={20} className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#292B2f] text-white p-1 outline-none w-full md:w-auto"
        />
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button className="p-3 bg-gray-700 rounded-full text-sm"><CiMail size={20} /></button>
        <button className="p-3 bg-gray-700 rounded-full text-sm"><CiSettings size={20} /></button>
        <button className="p-3 bg-gray-700 rounded-full text-sm"><IoMdNotificationsOutline size={20} /></button>
        <button className="p-3 bg-gray-700 rounded-full text-sm"><img src='https://randomuser.me/api/portraits/women/4.jpg' alt='profilelogo' height={25} width={25} className='rounded-full '/></button>
      </div>
    </div>
  </div>
  );
};

export default Header;
