import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForms";
import Slider from "react-slick";
import { Button, Grid, TextField } from "@mui/material";
import Swal from "sweetalert2";


export const SliderComp = ({
    settings,
    data,
    handleOnClick,
    isClicked,
  }) => {

  
    const { onInputChange, address, city , state ,zip } = useForm({
      address: " ", city: " ",state:" ", zip: " "
    });
  

  
    const SendDataToParent = () => {
      handleOnClick(address, city , state ,zip);
      Swal.fire({
        icon: 'success',
        title: 'Your package has been updated',
        showConfirmButton: false,
        timer: 1000, 
        customClass: {
          popup: 'small-popup'
        }
      })
    };

  


    return (
        <>
          {isClicked ? (
            <>
              <Slider {...settings}>
                {data.map((item) => (
                  <div key={item.packageNumber}>
                    <div>
                      <h3 style={{ marginTop: '80px' }}>Item num: {item.packageNumber}</h3>
                    </div>
                    <div style={{
                      display: 'flex',
                      margin: '1px auto',
                      marginLeft: '100px'
                    }}>
                      <p><b>Address: </b></p>
                      <TextField
                        style={{ marginTop: '10px', marginLeft: '5px' }}
                        onChange={onInputChange}
                        size='small'
                        name='address'
                        value={address}
                      />
                    </div>
                    <div style={{
                      display: 'flex',
                      margin: '1px auto',
                      marginLeft: '129px'
                    }}>
                      <p><b>City: </b></p>
                      <TextField
                        style={{ marginTop: '10px', marginLeft: '5px' }}
                        onChange={onInputChange}
                        placeholder={city}
                        size='small'
                        name='city'
                        value={city}
                      />
                    </div>
                    <div style={{
                      display: 'flex',
                      margin: '1px auto',
                      marginLeft: '120px'
                    }}>
                      <p><b>State: </b></p>
                      <TextField
                        style={{ marginTop: '10px', marginLeft: '5px' }}
                        onChange={onInputChange}
                        size='small'
                        name='state'
                        value={state}
                      />
                    </div>
                    <div style={{
                      display: 'flex',
                      margin: '1px auto',
                      marginLeft: '133px'
                    }}>
                      <p><b>Zip:</b></p>
                      <TextField
                        style={{ marginTop: '10px', marginLeft: '5px' }}
                        onChange={onInputChange}
                        size='small'
                        name='zip'
                        value={zip}
                        />
                        </div>
                        </div>
                        ))}
                        </Slider>
                        <Grid mt='30px'>
                        <Button onClick={() => SendDataToParent()}>Save</Button>
                        </Grid>
                        </>
                        ) : (
                        <>
                        <Slider {...settings}>
                        {data.map((item) => (
                        <div key={item.packageNumber}>
                        <div>
                        <h3 style={{ marginTop: '80px' }}>Item num: {item.packageNumber}</h3>
                        </div>
                        <div>
                        <p>
                        <b>Address:</b> {item.address}
                        </p>
                        </div>
                        <div>
                        <p>
                        <b>City:</b> {item.city}
                        </p>
                        </div>
                        <div>
                        <p>
                        <b>State:</b> {item.state}
                        </p>
                        </div>
                        <div>
                        <p>
                        <b>Zip:</b> {item.zip}
                        </p>
                        </div>
                        </div>
                        ))}
                        </Slider>
                        <Grid mt='50px'>
                        <Button onClick={handleOnClick}>Edit Package</Button>
                        </Grid>
                        </>
                        )}
                        </>
                        );
                        };    