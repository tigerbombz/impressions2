import React from 'react';
import { Component } from 'react';
import Nav from './layout/nav';
import Footer from './layout/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
