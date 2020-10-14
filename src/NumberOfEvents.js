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

  /* 
*/

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
          {/* <ErrorAlert text={this.state.infoText} />  */}
      </div>
    );
  }

}

export default NumberOfEvents;

  /* 
  if (value < 1) {
    this.setState({
      infoText: 'Select number from 1 to 32'
    });
  } else {
    this.setSate({
      infoText: "",
    });
    }
  }
               <ErrorAlert text={this.state.infoText} />  
               import { ErrorAlert } from "./Alert";*/
