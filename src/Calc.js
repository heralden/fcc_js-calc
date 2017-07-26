import React, { Component } from 'react';
import './Calc.css';
import Display from './Display';
import Interface from './Interface';

class Calc extends Component {
  render() {
    return (
      <div className="Calc">
        <Display text="1234567890" subtext="1+1" />
        <Interface />
      </div>
    );
  }
}

export default Calc;
