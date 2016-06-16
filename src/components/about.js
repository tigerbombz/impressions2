import React from 'react';
import { Component } from 'react';

const tina = require('../images/tina1.jpg');
const michelle = require('../images/michelle.png');
const tina_michelle = require('../images/tina_michelle.png');

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='about_container col-md-12 col-xs-12'>
          <div className='row about_row col-md-12 col-xs-12'>
            <div className='tina col-md-7 offset-md-1 col-xs-12'>
              <h3>TINA LE, MASTER STYLIST</h3>
              <p>Tina, founder and owner of Impression’s Hair Design, brings 30+ years of hair care and hair styling to her customers.  She is a master of hair coloring, highlighting, and your everyday styling.  Keeping up to date with the latest trends, she is a master of balayages, ombres, and color melting techniques.  Her attention to detail of her client’s needs and level of customer service bring her customers back month after month.
              </p>
              <p>
                The salon boasts regulars from children to elders, both male and female.  Her team and staff come from multiple ethnicities being able to serve their customer in their native tongue.
              </p>
            </div>
            <div className='about_pic col-md-4 col-xs-12'>
              <img src={tina} />
            </div>
          </div>

          <div className='row about_row col-md-12 col-xs-12'>
            <div className='about_pic col-md-4 offset-md-1 col-xs-12'>
              <img src={michelle} />
            </div>
            <div className='michelle col-md-7 col-xs-12'>
              <h3>MICHELLE NGUYEN, MASTER COLORIST</h3>
              <p>Michelle is known for demanding excellence in everything she does. Whatever needs to be done, when Michelle is involved, perfection isn't just expected: it's inevitable. Her uncanny ability to see everything with her eyes makes her the standard as a colorist. Anything she touches turns into pure gold.</p>
              <p>Michelle, daughter of Tina and under her tutelage, is a master of not only hair, but of eyebrow embroidery.  The latest technique in eyebrow tattooing that allows for a natural look lasting two to three years. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
