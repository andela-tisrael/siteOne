import React, { Component } from 'react';

import './App.css';
import NavBar from './client-side/components/navbar';
import Footer from './client-side/components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="App-content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
