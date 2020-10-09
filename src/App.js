import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
state = {
  events: [],
  currentLocation: 'all',
  locations: [],
};

updateEvents = (location) => {

  getEvents().then((response) => {
    const locationEvents =
      location === 'all'
        ? response.events
        : response.events.filter((event) => event.location === location);
    const events = locationEvents.slice(0, NumberOfEvents); // even controleren of NumberOfEvents met hfdletter begint
    return this.setState({
      events : events,
      currentLocation: location,
    });
  });
}
  render() {

    return (
      < div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}
export default App;
