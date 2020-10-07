import React, { Component } from 'react';
import { mockData } from'./mock-data';

class Event extends Component {
  render() {
    return (
    <div className="Event">
      <p className="event__summary">
      {this.props.event.name}
      </p>
      </div>
    );
  }
}

export default Event;