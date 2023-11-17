import React from "react";
import { Chart } from "react-google-charts";
import './PieChartComponent.css'

export const data = [
  ["Task ", "Hours per Day"],
  ["Fashion ", 11],
  ["Sports ", 2],
  ["Games ", 2],
  ["Computers ", 2],
  ["Electronics ", 7],
  ["Gardening ", 7],
];

// const data = {
//     Task : "Hours per Day",
//     Work : 11,
//     Eat : 2 ,
//     Commute : 2 , 
//     Watch : 2 ,
//     Sleep : 7 
// };



export const options = {
  title: "Best Selling categories",
  colors: ['#5A4FCF','#545AA7','#73C2FB'],
  legend: { position: 'none' },
};

function PieChartComponent() {
    
  return (
    
    <div>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      height={"60vh"}
      
    />
   
    <div className="pie-chart-content">
    <p> {data[1]}%</p>
    <p> {data[2]}%</p>
    <p> {data[3]}%</p>
    <p> {data[4]}%</p>
    <p> {data[5]}%</p>
    <p> {data[6]}%</p>
    </div>
    </div>
  );
  
}
export default PieChartComponent ;