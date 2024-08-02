import React from 'react'
import { BiDish, BiTargetLock } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";

const MidHome = () => {
  return (
    <div className='flex flex-wrap justify-between mt-4 h-auto md:h-[300px]'>
      <div className='bg-[#1F2029] w-full md:w-[55%] h-auto md:h-full p-6'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>Activity</h1>
          <div className='text-sm bg-slate-500 px-3 py-2 rounded-full'>Weekly</div>
        </div>

   



      </div>





      <div className='bg-[#1F2029] py-6 px-10 md:py-14 md:px-[40px] w-[40%] md:w-[42%] mt-4 md:mt-0'>
        <div className='flex flex-col justify-between gap-3'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-red-900 w-14 h-14 rounded-full p-4 text-red-400'>
                <BiTargetLock className='mr-2' size={25} />
              </div>
              <div>Goal</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full'>  <RiArrowRightSLine className='' size={25} /> </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-blue-900 w-14 h-14 rounded-full p-4 text-blue-400'>
                <BiDish className='mr-2' size={25} />
              </div>
              <div>Popular Dishes</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full'>  <RiArrowRightSLine className='' size={25} /> </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-green-900 w-14 h-14 rounded-full p-4 text-green-400'>
                <MdFastfood className='mr-2' size={25} />
              </div>
              <div>Menus</div>
            </div>
            <div className='w-8 h-8 p-1 bg-slate-600 rounded-full'>  <RiArrowRightSLine className='' size={25} /> </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default MidHome
