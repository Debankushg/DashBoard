import React from 'react';
import HomeFooter from '../component/HomeFooter';
import MidHome from '../component/MidHome';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CiShoppingBasket, CiWallet, CiMoneyCheck1, CiCreditCard1 } from 'react-icons/ci';
import DoughnutChart from '../component/Doughnut';

const data = [
  {
    icon: <CiShoppingBasket size={30} />,
    bgColor: 'bg-red-900',
    textColor: 'text-red-500',
    title: 'Total Orders',
    value: 75,
    percentage: 3,
  },
  {
    icon: <CiWallet size={30} />,
    bgColor: 'bg-blue-900',
    textColor: 'text-blue-500',
    title: 'Total Revenue',
    value: 70,
    percentage: -2,
  },
  {
    icon: <CiMoneyCheck1 size={30} />,
    bgColor: 'bg-green-900',
    textColor: 'text-green-500',
    title: 'Total Profit',
    value: 40,
    percentage: 5,
  },
  {
    icon: <CiCreditCard1 size={30} />,
    bgColor: 'bg-yellow-900',
    textColor: 'text-yellow-500',
    title: 'Total Expenses',
    value: 300,
    percentage: -1,
  },
];

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className='mt-4'>
        <div className='flex flex-wrap justify-between'>

          <div className='flex flex-wrap justify-between gap-4 w-full md:w-[55%]'>
            {data.map((card, index) => (
              <div key={index} className='bg-[#1F2029] w-full md:w-[48%] lg:w-[23%] h-[150px] flex flex-col p-4 aspect-square'>
                <div className={`flex justify-center items-center ${card.bgColor} ${card.textColor} w-[40px] h-[40px] rounded-md px-2`}>
                  {card.icon}
                </div>
                <div className='my-2 text-white text-sm font-bold'>{card.title}</div>
                <div className='flex justify-between gap-3 text-white'>
                  <div className='text-3xl font-bold'>{card.value}</div>
                  <div className={`text-sm flex mt-2 ${card.percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span className='mt-1'> {card.percentage >= 0 ? <FaCaretUp /> : <FaCaretDown />}</span>  {card.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-[#1F2029] py-6 px-4 w-full md:w-[42%] mt-4 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between gap-8'>
              <div className='text-3xl font-bold text-white'>
                <div className='text-sm font-light mb-4'>Net Profit</div>
                <div className='text-3xl font-bold'>$6727.34</div>
                <div>
                  <div className={`text-sm flex mt-2 text-green-500`}>
                    <span className='mt-1'><FaCaretDown /></span>  5%
                  </div>
                </div>
              </div>
              <div className='text-sm px-4 rounded-full'>
                <DoughnutChart />
                <p className='text-white text-[10px]'>* The values that have been rounded off</p>
              </div>
            </div>
          </div>
        </div>

        <MidHome />

        <HomeFooter />
      </div>
    </>
  )
};

export default Home;
