import React from 'react';
import { BiDish, BiTargetLock } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import BarChart from './BarChart';

const MidHome = () => {
  return (
    <div className='flex flex-wrap justify-between mt-2 h-auto md:h-[300px]'>
      <div className='bg-[#1F2029] w-full md:w-[55%] h-auto md:h-full p-6 mb-4 md:mb-0'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-3xl font-bold text-white'>Activity</h1>
          <div className='text-sm bg-slate-500 px-3 py-2 rounded-full text-white'>Weekly</div>
        </div>
        <BarChart />
      </div>




      
      <div className='bg-[#1F2029] py-4 px-6 md:py-14 md:pt-[20px] w-full md:w-[42%] mt-4 md:mt-0'>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-red-900 w-14 h-14 rounded-full flex items-center justify-center text-red-400'>
                <BiTargetLock size={25} />
              </div>
              <div className='text-white'>Goal</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full flex items-center justify-center'>
              <RiArrowRightSLine size={25} className='text-white' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center text-blue-400'>
                <BiDish size={25} />
              </div>
              <div className='text-white'>Popular Dishes</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full flex items-center justify-center'>
              <RiArrowRightSLine size={25} className='text-white' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-green-900 w-14 h-14 rounded-full flex items-center justify-center text-green-400'>
                <MdFastfood size={25} />
              </div>
              <div className='text-white'>Menus</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full flex items-center justify-center'>
              <RiArrowRightSLine size={25} className='text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHome;
