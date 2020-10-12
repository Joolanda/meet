import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, value);
  };

  render() {
    return(
      <div className='numberOfEvents'>
        <label>Number of Events: </label>
          <input
            value={this.state.numberOfEvents}
            type='text'
            className='numberOfEventsInput'
            onChange={this.handleInputChanged}
            >
        </input>
      </div>
    );
  }

}

export default NumberOfEvents;