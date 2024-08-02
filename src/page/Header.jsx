import React from 'react';
import { CiMail, CiSettings, CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[#1F2029] text-white py-4 px-6">
      <div className='flex justify-between'>
        <div className="flex items-center bg-[#292B2f] px-2 py-[2px] rounded-md">
          <CiSearch size={20} className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#292B2f] text-white p-1 outline-none flex-grow"
          />
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-gray-700 rounded-full text-sm"><CiMail size={20} /></button>
          <button className="p-3 bg-gray-700 rounded-full text-sm"><CiSettings size={20} /></button>
          <button className="p-3 bg-gray-700 rounded-full text-sm"><IoMdNotificationsOutline size={20} /></button>
          <button className="p-3 bg-gray-700 rounded-full text-sm">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
