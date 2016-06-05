import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppts } from '../actions/index'
import { Link } from 'react-router';

const store1 = require('../images/store1.png')


class ContentIndex extends Component {

  render() {
    return (
      <div>
        <div className='main_div'>
          <img src={store1} alt='main'className='main' />
        </div>
        <div className='quote'>
          <span className='words'>
            THE ULTIMATE EXPERIENCE IN LUXURY HAIR CARE
          </span>
        </div>
        <div className='image_container'>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://absolutbusinessbrokers.com.au/wp-content/uploads/2015/03/hair-salon-business-fro-sale-B11983.jpg'} style={{width: 340, height: 250}} />
            <label> Hair Color </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://arsengurgov.com/wp-content/uploads/2016/02/dry-hair-cut-Arsen-Gurgov-NYC-Hairstylist-.jpg'} style={{width: 340, height: 250}} />
            <label> Haircut & Style </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://im.hunt.in/cg/panipat/City-Guide/beauty-parlour-1.jpg'} style={{width: 340, height: 250}} />
            <label> Beauty Service </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://providenceplacebridal.com/wp-content/uploads/2015/04/wedding-hair-2.jpg'} style={{width: 340, height: 250}} />
            <label> Bridal</label>
          </div>

        </div>

      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);


//BOOTSTRAP CAROUSEL --> CONTINUTE LATER
// const tina = require('../images/tina.png');
// const michelle = require('../images/michelle.png');


// export default class Services extends Component {
//   render() {
//     return (
//       <div>
//         <div id='myCarousel' className  ='carousel slide'>
//           <ol className='carousel-indicators'>
//             <li data-target ='#myCarousel' data-slide-to='0' className='active'></li>
//             <li data-target ='#myCarousel' data-slide-to='1'></li>
//             <li data-target ='#myCarousel' data-slide-to='2'></li>
//           </ol>
//           <div className='carousel-inner'>

//             <div className='item active'>
//               <img src={tina} className='img-responsive' height={500} width={900} />
//             </div>

//             <div className='item'>
//               <img src={michelle} className='img-responsive' height={500} width={900} />
//             </div>

//           </div>

//           <a className='carousel-control left' href='#myCarousel' data-slide ='prev'>
//             <span className='icon-prev'></span>
//           </a>
//           <a className='carousel-control right' href='#myCarousel' data-slide ='next'>
//             <span className='icon-next'></span>
//           </a>

//         </div>
//       </div>
//     )
//   }
// }
