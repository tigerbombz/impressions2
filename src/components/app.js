import React from 'react';
import { Component } from 'react';
import Navigation from './layout/nav';
import Footer from './layout/footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
