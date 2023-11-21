import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client"
import Grid from '@mui/material/Grid';


function Statistics() {
    return (

        <Grid item xs={12} style={{hight:'100vh' , width:'100%'}}>

            <iframe title="Claims Pareto Link" src={"https://app.powerbi.com/view?r=eyJrIjoiNGU3NzQxMDYtZjlhYy00YWNlLTg5ZDEtZjNhMjJiZmI4YmQ2IiwidCI6ImE5ZTRlYjg3LWY4OTAtNGE3My05YTYwLTRiMmVjZGI3ZWY4YiJ9&embedImagePlaceholder=true"} width="100%" height="450"></iframe>
        </Grid>


    )
}

export default Statistics