import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
Chart.register(LinearScale, CategoryScale, BarElement);
const labels = ['jan', 'feb', 'mar', 'Apr', 'may', 'jun', 'sep'];

const options = {
  plugins: {
    title: {
      display: true,
    },
  },
};
const data = {
  labels,
  datasets: [
    {
      label: '2020 Expense',
      data: [10000, 12000, 14000, 10484 , 16000 ,17201 , 18100],
      backgroundColor:'#545AA7'
    },
    {
      label: '2021 Expense',
      data: [18000, 17022, 19000, 14300 , 13021 , 12011 ,10002],
      backgroundColor: '#5A4FCF',
      height: '0px',
      width: '50px',
    },
  ],
};
function BarChartComponents() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Bar data={data} />
    </div>
  );
}
export default BarChartComponents;
