import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  render() {
    return(
      <div className='numberOfEvents'>
        <label>
          <h5>Number of Events:</h5></label>
          <input
            value={this.state.numberOfEvents}
            type='text'
            className='numberOfEventsInput'
            onChange={this.handleOnchange}>
          {this.state.numberOfEvents}
        </input>
      </div>
    );
  }

}

export default NumberOfEvents;