import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Paper } from '@mui/material';
import { useForm } from './hooks/useForms';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './assets/App.css'


class Paquete {
  constructor(address,city,state, zip, country, packageNumber) {
    this.address = address
    this.city = city 
    this.state = state
    this.zip = zip 
    this.packageNumber = packageNumber
    this.country = country
  }  

}

export const  AddressForm = () => {

  const [arr, setarr] = useState([])
  const [isClicked, setisClicked] = useState(false)
  const {onInputChange, setInitialForm, address, city, state, zip, country} = useForm({
    address:"", 
    city:"",
    state:"", 
    zip:"", 
    country:"",
   
  })


  const handlesubmit = (e) => {
    e.preventDefault() 
    let id = Math.floor(Math.random()*100)
    const object = new Paquete(address,city,state, zip, country, id)
    setarr([...arr, object])
    setInitialForm()
    setisClicked(true)
  }


  return (
    <React.Fragment>
      <form onSubmit={handlesubmit}>
      <Paper elevation={10} style={{margin: '11px auto', paddingTop:'20px' ,height:'420px', maxWidth: '510px'}}>
      <Grid item  xs={12} sm={6} md={4} justify="center" style={{padding: '2px', margin: 'auto', maxWidth: '400px', maxHeight: '400px' }}>
      <Grid item style={{
        marginTop: '70px',
        marginBottom: '20px'
      }}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      </Grid>
      <Grid container spacing={3}>
      
         <Grid item xs={12}>
          <TextField
            required
           
            name="address"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={address}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
           
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
        
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={state}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zip}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={country}
            onChange={onInputChange}
          />
          </Grid>
          
        
        
        <Grid item style={{ margin: "5px auto"}} >
        <Button type='submit'>
          Send
        </Button>
         {isClicked && (<Link  to='/package' state = {{data: arr}}>List of Packages</Link>)}
        </Grid>
      </Grid>
      </Grid>
      </Paper>
      </form>
    </React.Fragment>
  );
}


