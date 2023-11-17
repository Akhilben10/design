import React from 'react';
import './CardComponent.css';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CardList from '../../ReusableComponents/CardList';
import { Link } from 'react-router-dom';

const CardComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={2.5}>
                    <h2 className='card-component-head'>Analytics</h2>
                    <p className='card-component-text'>KPI analysis for e-commerce</p>
                    

                </Grid>
                <Grid item xs={2.5} className='card-component'>
                    <div className="card-component-div">
                        <div className="card-component-div-weak">year</div>
                        <div className="card-component-div-weak">Month</div>
                        <div className="card-component-div-weak">Weak</div>
                    </div>

                </Grid>
                <Grid item xs={2.5}>


                </Grid>
                <Grid item xs={2.5} className='card-component'>
                    {/* <ListItem button className="sidebar-item">
          <ListItemIcon>
            <CalendarMonthIcon /> 
          </ListItemIcon>
          <ListItemText />
        </ListItem> */}
                    <CalendarMonthIcon /> <p>10 February, 2023</p><SearchIcon />

                </Grid>
                {/* <Grid item xs={1}>


                </Grid>
                <Grid item xs={1}>

                </Grid> */}
                <Grid container spacing={2} className='mx-4'>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2.5}>
                        <CardList/>
                    </Grid>
                <Grid item xs={2.5}>
                    <Card>
                        <CardHeader title="64,12%" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                64,12%
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={2.5}>
                    <Card>
                        <CardHeader title="82,19%" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                82,19%
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={2.5}>
                    <Card>
                        <CardHeader title=" $5,450.32" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                $5,450.32
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={1}>

                </Grid>
                </Grid>
            </Grid>
        </Box>

    );
};

export default CardComponent;
