import { red, yellow } from '@mui/material/colors';
import React from 'react';
import { Chart } from 'react-google-charts';

 const data = [
  ['Task', 'Hours per Day', 'ben'],
  ['Facebook', 11,12 ],
  ['Instagram', 12 ,12 ],
  ['Youtube', 9 ,15],
  ['Twitter',12,11],
];

export const options = {
  title: 'Engagement per channel',
  colors: ['#5A4FCF','#545AA7','#73C2FB'],
  //backgroundColor : 'red',

};

function HorizontalBarComponent() {
  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={options}
      width={'100%'}
      height={'100%'}
      backgroundColor={"yellow"}
      
    />
  );
}
export default HorizontalBarComponent;