import { Button, Grid } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { SliderComp } from './SliderComp';

export const CarruselComponent = ({data}) => {

    const [current, setcurrent] = useState(0)
    const [actualData, setActualData] = useState(data[current])
    const [Isclicked, setClicked] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setcurrent(current)
      };
       
      const getDataByChild = (address, city, state, zip) => {
        const data1 = {...data}
         data1[current].address= address
         data1[current].city = city
         data1[current].state = state
         data1[current].zip = zip
         setActualData(data1)
         setClicked(!Isclicked)
      }


      
      return (
       <SliderComp 
       settings={settings} 
       isClicked={Isclicked} 
       data={data} 
       handleOnClick={getDataByChild}
       CurrentData = {data[current]}
       />
    );
}
  


