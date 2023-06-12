import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { Link, json, useLocation } from 'react-router-dom';
import { CarruselComponent } from './CarruselComponent';


export const ListComponent = () => {
  
  
 const location = useLocation();
 const data = location.state.data

  return (
    <>
     <Paper elevation={10} style={{margin: '11px auto', marginTop:'100px', height:'550px', maxWidth: '500px'}}>
     <Grid item align='center' >
      <Typography style={{marginTop:"100px"}} variant="h6" gutterBottom>
       <b>List of packages</b>
    </Typography>
      </Grid>
   
    
    <CarruselComponent data={data}/> 

    <Grid item mt='20px' >
        <Link to='/' style={{marginLeft: "10px"}}>
          Add more packages
        </Link>
        </Grid>
    </Paper>
    </>
  )
}
