import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails ===false) {
      this.setState({showDetails: true });
    } else {
      this.setState({ showdetails: false });  
    }
  };

  render() {

    const showDetails = this.state.showDetails;
    
    return (
    <div className='event'>
      <div className='event__summary'>
      <h1> {this.props.event.summary}</h1>
      </div>
      <p className='event__summary--dateTime'>{this.props.event.start.dateTime}</p>
      <p className='event__summary--timeZone'>{this.props.event.start.timeZone}</p>
      {showDetails && 
      <button
        className='details-btn'
        onClick={() => this.handleShowDetails()}> 
        hide details
      </button>}
      {!showDetails && 
      <button
        className='details-btn'
        onClick={() => this.handleShowDetails()}> 
        show details
      </button>}
      {showDetails && 
        <div className='event__Details'>
          <h3>About event: </h3>
          <h4><a ref={htmlLink} target='blank'> See details on Google Calendar </a></h4>
          <p className="event__Details--description">{this.props.event.description}</p>
      </div>
      }
    </div>
    );
  }
}

export default Event;