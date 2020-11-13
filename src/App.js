import React, { Component } from 'react';
import "./nprogress.css";
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';
import { checkToken, getToken } from './api';

class App extends Component {

state = {
  events: [],
  currentLocation: "all",
  numberOfEvents: 32,
  offlineText: "",
  locations: []
};

warningAlert = () => {
  if (navigator.onLine === false) {
    this.setState({
      offlineText: "You are currently using this app offline, so be aware that the displayed list may not be updated."
    });
  } else {
    this.setState({
      offlineText: "",
    });
  }
}
async componentDidMount() {
  this.mounted = true;
  await getEvents().then((response) => {
    if(this.mounted) {
    this.setState({ 
      events: response.events,
      locations: response.locations,
     });
    }
  });
}
componentWillUnmount() {
  this.mounted = false;
}
// retrieving data cities
getData = () => {
  const { locations, events } = this.state;
  const data = locations.map((location) => {
    const number = events.filter((event) =>event.location ===location).length;
    const city = location.split(" ").shift();
    return { city, number };
  });
  return data;
};

// task part 3: you'll need to refactor the UpdateEvents fct
// to take 2 parameters "location" and "eventCount" and in the state 32 number of events
updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

  render() {
    const { locations, numberOfEvents, events } = this.state
    return (
      < div className="App">
        <h1> Meet App</h1>
        <h3>Choose your nearest city</h3>
        <CitySearch updateEvents={this.updateEvents} locations={this.state.locations} />
        <WarningAlert text={this.state.offlineText} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents= {numberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
