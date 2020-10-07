import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  render() {
    return(
      <div className='numberOfEvents'>
        <label>Number of Events: </label>
          <input
            value={this.state.numberOfEvents}
            type='text'
            className='numberOfEventsInput'
            onChange={this.handleOnchange}>
        </input>
      </div>
    );
  }

}

export default NumberOfEvents;