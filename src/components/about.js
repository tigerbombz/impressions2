import React from 'react';
import { Component } from 'react';

const tina = require('../images/tina.png');
const michelle = require('../images/michelle.png');


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='about_container'>
          <div className='row about_row'>
            <div className='tina col-md-7 col-xs-12'>
              <h3>TINA LE, MASTER STYLIST & FOUNDER</h3>
              <p>With over 30 years experience, Tina is the absolute best. She is widely known for her abilities to perfectly customize every client's needs using advanced techniques. Modern in her methods, she is adamant about constantly expanding her horizons, keeping up with the latest hair trends, and mastering the skills in her craft. What truly sets her part is her great sense of personality and contagious smile.
              </p>
              <p>
                As founder of Impression's Hair Design, Tina dreams of a life where she can service others with her wide variety of skills while maintaining high level of customer service with her clients. Her love and passion is always growing and the skys the limit with her.
              </p>
            </div>
            <div className='about_pic col-md-5 col-xs-12'>
              <img src={tina} />
            </div>
          </div>
          <div className='row about_row'>
            <div className='about_pic col-md-5 col-xs-12'>
              <img src={michelle} />
            </div>
            <div className='michelle col-md-7 col-xs-12'>
              <h3>MICHELLE NGUYEN, MASTER COLORIST & DAUGHTER</h3>
              <p>Michelle is known for demanding excellence in everything she does. Whatever needs to be done, when Michelle is involved, perfection isn't just expected: it's inevitable. Her uncanny ability to see everything with her eyes makes her the standard as a colorist. Anything she touches turns into pure gold.</p>
              <p>As the daughter of Tina, she has a degree of standard to live up to and she is not afraid of the challenge. Only when she is challenged does she take her artistry to the next level and elevates not only her game but everyone she's around.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
