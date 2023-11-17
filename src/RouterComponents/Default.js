import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarChartComponents from '../components/ChartComponent/BarChartComponent';
import PieChartComponent from '../components/ChartComponent/PieChartComponent';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
  return (
   <>
   <br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: "#545AA7" }}>
            <CardHeader title="$500.00" textColor="white"/>
            <CardContent >
              <Typography variant="body2" color="white">
                Total Earning
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ backgroundColor: "#0CAFFF" }}>
            <CardHeader title="64,12%" />
            <CardContent>
              <Typography variant="body2" color="White">
                Total Order
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: '50px',  backgroundColor: "#0CAFFF" , display:'flex' }}>
            <CardHeader title="$203k" />
            <CardContent>
              <Typography variant="body2" color="White">
                Total Income
              </Typography>
            </CardContent>
          </Card>
          <br/>
          <Card sx={{ height: '50px' , display:'flex'}}>
            <CardHeader title="$203k" />
            <CardContent>
              <Typography variant="body2" color="Black">
              Total Income
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <BarChartComponents/>
        </Grid>
        <Grid item xs={4}>
        <PieChartComponent/>
        </Grid>
      </Grid>
    </Box>
   </>
  );
}