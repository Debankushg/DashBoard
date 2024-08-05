import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      // {
      //   label: 'Sales 2023',
      //   data: [65, 59, 80, 81, 56, 55, 40],
      //   backgroundColor: 'rgba(75, 192, 192, 0.6)',
      //   borderColor: 'rgba(75, 192, 192, 1)',
      //   borderWidth: 1,
      // },
      {
        label: 'Sales 2024',
        data: [75, 69, 90, 91, 66, 65, 50],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top
      },
      title: {
        display: true,
        text: 'Monthly Sales Data', // Chart title
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '700px', height: '220px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
