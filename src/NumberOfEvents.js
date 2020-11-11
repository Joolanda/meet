import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });

    if (value > 32) {
      this.setState({
        infoText: 'Select number of events from 1 to 32'
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };


  render() {
    const { numberOfEvents } = this.state;
    return(
      <div className='numberOfEvents'>
        <label>Number of Events: </label>
          <input
            id='numberOfEvents__input'
            value={numberOfEvents}
            type='text'
            className='numberOfEventsInput'
            onChange={this.handleInputChanged}
            />
          <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
