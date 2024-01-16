import {Modal1} from './modal1/modal1.jsx'
import {Modal2} from './modal2/modal2.jsx'
import {Lista} from './lista/lista.jsx'
import {Grafica} from './grafica/grafica.jsx';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function App() {
  return (
    // <div>
    // <Modal1></Modal1>
    // <Modal2></Modal2>
    // <Lista></Lista>
    // <Grafica></Grafica>
    // </div>

<Box sx={{ flexGrow: 1 }}>
   <Modal1></Modal1>
   <Modal2></Modal2>
<Grid container spacing={2}>

  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Lista></Lista>
  </Grid>

  <Grid  item xs={12} sm={12} md={12} lg={12}>
  <Grafica></Grafica>
  </Grid>
  
</Grid>
</Box>
  )
}

