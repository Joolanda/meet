import React, { Component } from 'react';
import { mockData } from'./mock-data';

class Event extends Component {
  state = {
    showdetails: false,
  };



  render() {
    return (
    <div className="Event">
      <div className="event__summary">
      <h1> {this.props.event.summary}</h1>
      </div>
      <p className="event__summary--dateTime">{this.props.event.dateTime}</p>
      <p className="event__summary--timeZone">{this.props.event.timeZone}</p>
      <button
        className='details-btn'> 
        show details
      </button>
      </div>

    );
  }
}

export default Event;