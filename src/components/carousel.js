import React from 'react';
import { Carousel } from 'react-bootstrap';
const group1 = require('../images/group1.jpg');
const store1 = require('../images/store1.jpg');
const group2 = require('../images/group2.jpg');


export default function carouselInstance() {
 return (
   <Carousel className='carousel'>
    <Carousel.Item>
      <img src={group1} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={store1} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={group2} />
    </Carousel.Item>
  </Carousel>
 );
}


