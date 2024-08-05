import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = () => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Goal Completion',
        data: [70, 30], // 70% completed, 30% remaining
        backgroundColor: ['#4c84ff', '#2f3b52'],
        hoverBackgroundColor: ['#4c84ff', '#2f3b52'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '80%', // Adjust the inner radius of the Doughnut
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      beforeDraw: (chart) => {
        const { width, height, ctx } = chart;
        ctx.restore();
        const fontSize = (height / 150).toFixed(2); // Adjusted font size calculation
        ctx.font = `bold ${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff'; // Set fill color to white for visibility

        const text1 = '70%';
        const text2 = 'Goal Completed';
        const textX1 = Math.round((width - ctx.measureText(text1).width) / 2);
        const textY1 = height / 2 - 10;
        const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
        const textY2 = height / 2 + 10;

        ctx.fillText(text1, textX1, textY1);
        ctx.font = `normal ${(fontSize / 2).toFixed(2)}em sans-serif`;
        ctx.fillText(text2, textX2, textY2);
        ctx.save();
      },
    },
  };

  return (
    <div style={{ width: '150px', height: '150px', padding: '20px', borderRadius: '15px' }}>
    <div className='flex flex-col items-center relative top-10'>
      <h1 className='text-3xl font-bold absolute top-[-10px] right-[15px] '>70%</h1>
      <h3 className='text-[10px] absolute top-5'>Goal Completion</h3>
    </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
