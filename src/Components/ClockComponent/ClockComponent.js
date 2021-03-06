import React, { Component } from 'react';
import Clock from 'react-clock';

class ClockComponent extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (

      <div style={{padding:'10px'}}>
        <Clock
          value={this.state.date} size={200} renderNumbers={true} 
        />

        </div>

    );
  }
}

export default ClockComponent
