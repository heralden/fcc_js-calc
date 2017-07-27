import React, { Component } from 'react';
import './Calc.css';
import Display from './Display';
import Interface from './Interface';
import actionHandler from './calcActions';

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: 0,
      subinput: [ 0 ]
    };
  }

  handleAction = action => () => {
    this.setState(
      actionHandler(
        action,
        this.state.input,
        this.state.subinput
      )
    );
  }

  render() {
    return (
      <div className="Calc">
        <Display text={this.state.input} 
          subtext={this.state.subinput} />
        <Interface onAction={this.handleAction} />
      </div>
    );
  }
}

export default Calc;
