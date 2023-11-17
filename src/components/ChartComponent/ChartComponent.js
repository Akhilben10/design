import React from 'react';
import { Bar } from 'react-chartjs-2';
import PieChartComponent from './PieChartComponent';
import BarChartComponents from './BarChartComponent';
import HorizontalBarComponent from './HorizontalBarComponent';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
//import './ChartComponent.css';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
Chart.register(LinearScale, CategoryScale, BarElement);
const labels = ['jan', 'feb', 'mar', 'Apr', 'may', 'jun', 'sep', 'oct', 'nov', 'dec'];
const options = {
    plugins: {
        title: {
            display: true,
        }
    },
    scales: {
        x: {
            barThickness: 300,
            CategorySpacing: 10
        }
    }
}
const data = {
    labels,
    datasets: [

        {
            label: '2021 Expense',
            data: [1800, 1702, 1900, 1430, 1234, 1456, 1543, 1986, 1221, 500],
            backgroundColor: '#5A4FCF',
            height: '0px',
            borderWidth: '10px',
        },
    ],
};

const ChartComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={7.5}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card>
                                <div style={{ height: '100%', Width: '100%' }}>
                                    <Bar data={data} options={options}  style={{ height: '100%', maxWidth: '100%' }}/>
                                </div>
                            </Card>

                        </Grid>
                        <Grid item xs={6}>
                            <Card style={{ height: '100%', Width: '100%' }}>
                            <HorizontalBarComponent/>
                               
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card style={{ height: '100%', Width: '100%' }}>
                               <BarChartComponents/>
                            </Card>


                        </Grid>
                    </ Grid>

                </Grid>
                <Grid item xs={2.5}>
                    <Card>
                        <PieChartComponent />
                    </Card>

                </Grid>
                <Grid item xs={1}>


                </Grid>
            </Grid>
        </Box>

    );
};

export default ChartComponent;
