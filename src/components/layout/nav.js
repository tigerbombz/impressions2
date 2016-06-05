import React, { Component } from 'react';
import { IndexLink, Link } from "react-router";


export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" role="navigation">
        <div>
          <h1>Impressions Hair Design</h1>
          <ul className='nav-right' style={{display: 'inline-block'}}>
            <li><Link to='contact' activeStyle='active'>Contact</Link></li>
            <li><Link to='about-us' activeClassName='active'>About Us</Link></li>
            <li><Link to='book-online' activeClassName='active'>Book-Online</Link></li>
            <li><Link to='services' activeClassName='active'>Services</Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
