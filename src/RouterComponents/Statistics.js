import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client"
import Grid from '@mui/material/Grid';
<Grid item xs={6}>
            <h1>Cards</h1>
                
            </Grid>


function Statistics() {
    return (
       
              <Grid item xs={12}>
               <iframe title="Summary CC" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=4227fbbe-c436-447c-83a6-40685f06cafe&appId=0122ce1a-a781-4314-88dc-50566c8a97fb&autoAuth=true&ctid=dafe49bc-5ac3-4310-97b4-3e44a28cbf18" frameborder="0" allowFullScreen="true"></iframe>
               </Grid>


    )
}

export default Statistics