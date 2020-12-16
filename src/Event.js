import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const { showDetails } = this.state;
    const {summary, start } = this.props.event;
    const eventStart = moment(start.dateTime, "YYYY-MM-DD HH:mm").toDate();
    return (
    <div className='event'>
      <div className='event__summary'>
      <h1 className="event__summary--name"> {summary}</h1>
        <p className='event__summary--dateTime'>{`${eventStart}`}</p> 
        {showDetails && (
          <button
            className='details-btn'
            onClick={() => this.setState({ showDetails: !showDetails })}>
            hide details
          </button>
          )}
          {!showDetails && (
        <button
            className="details-btn"
            onClick={() => this.setState({ showDetails: !showDetails })}>
            show details
          </button>
          )}
        </div>
        {showDetails && (
          <div className="event__Details">
            <h4>About event:</h4>
            <p className="event__Details--description">
              {this.props.event.description}
            </p>
          </div>
        )}
        </div>
    );
  }
}

export default Event;