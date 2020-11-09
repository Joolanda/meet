import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const { showDetails } = this.state;
    return (
    <div className='event'>
      <div className='event__summary'>
      <h1> {this.props.event.summary}</h1>
        <p className='event__summary--dateTime'>{this.props.event.start.dateTime}</p>
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