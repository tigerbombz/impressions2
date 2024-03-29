import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppts } from '../actions/index'
import { Link } from 'react-router';
import CarouselInstance from './carousel';

const store1 = require('../images/store1.jpg')


class ContentIndex extends Component {

  render() {
    return (
      <div className="main_container">
        <div className='main_div'>
          <CarouselInstance />
        </div>
        <div className='quote'>
          <span className='words'>
            THE ULTIMATE EXPERIENCE IN LUXURY HAIR CARE
          </span>
        </div>
        <div className='image_container'>

          <div className='box col-md-3 col-sm-3'>
            <Link to='services'><img src={'https://stylesatlife.com/wp-content/uploads/2019/11/Hairstyles-for-Girls-17.jpg.webp'} style={{width: 340, height: 250}} /></Link>
            <Link to='services'><label> Hair Color </label></Link>

          </div>
          <div className='box col-md-3 col-sm-3'>
            <Link to='services'><img src={'https://www.hairstylezonex.com/wp-content/uploads/2020/09/Trendy-Inverted-Bob-Haircuts-for-Women-in-2021-06.jpg'} style={{width: 340, height: 250}} /></Link>
            <Link to='services'><label> Haircut & Style </label></Link>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <Link to='services'><img src={'http://im.hunt.in/cg/panipat/City-Guide/beauty-parlour-1.jpg'} style={{width: 340, height: 250}} /></Link>
            <Link to='services'><label> Beauty Service </label></Link>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <Link to='services'><img src={'http://providenceplacebridal.com/wp-content/uploads/2015/04/wedding-hair-2.jpg'} style={{width: 340, height: 250}} /></Link>
            <Link to='services'><label> Bridal</label></Link>
          </div>
          
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);

