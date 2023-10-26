import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,

  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};

const labels = ["Post", "Comment", "Todo"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Bar Chart",
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      data: [10, 50, 20],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    }
  ]
};

function Barchart() {
  return (
    <div id='canvas-container1' className='bg-white border border-secondary'>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default Barchart
