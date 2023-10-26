import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
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
export const data = {
  labels: ["Post", "Comment", "Todo"],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 50, 20],
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)'],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
  return (
    <div id='canvas-container2' className='bg-white border border-secondary'>
       <Pie options={options} data={data} />
    </div>
  )
}

export default Piechart