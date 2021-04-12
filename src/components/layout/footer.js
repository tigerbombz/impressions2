import React from 'react';
import { Component } from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let date = new Date();
    let year = date.getFullYear();
    console.log(year);
    return (
      <footer>
        <div className='row col-lg-12'>
          <p>&copy; Impression's Hair Design {year} </p>
        </div>
      </footer>
    );
  }
}

export default Footer;