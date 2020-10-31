import React, { Component } from 'react';
import "./nprogress.css";
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
//import { checkToken, getToken } from './api';
class App extends Component {

state = {
  events: [],
  currentLocation: 'all',
  numberOfEvents: 32,
  locations: [],
};
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
componentWillUnmount(){
  this.mounted = false;
}
// retrieving data cities
getData = () => {
  const { locations, events } = this.state;
  const data = locations.map((location) => {
    const number = events.filter((event) =>event.location ===location).length;
    const city = location.split(' ').shift();
    return { city, number };
  });
  return data;
};

// task part 3: you'll need to refactor the UpdateEvents fct
// to take 2 parameters "location" and "eventCount" and in the state 32 number of events
updateEvents = (location, eventCount) => {
  const { currentLocation, numberOfEvents } = this.state;
  if (location) {
    getEvents().then((response) => {
      const locationEvents =
        location === "all"
          ? response.events
          : response.events.filter((event) => event.location === location);
      const events = locationEvents.slice(0, numberOfEvents);
      return this.setState({
        events: events,
        currentLocation: location,
        locations: response.locations,
      });
    });
  } else {
    getEvents().then((response) => {
      const locationEvents =
        currentLocation === "all"
          ? response.events
          : response.events.filter(
              (event) => event.location === currentLocation
            );
      const events = locationEvents.slice(0, eventCount);
      return this.setState({
        events: events,
        numberOfEvents: eventCount,
        locations: response.locations, // check this line of code
      });
    });
  }
}

  render() {
    const { locations, numberOfEvents, events } = this.state
    return (
      < div className="App">
        <h1> Meet App</h1>
        <h3>Choose your nearest city</h3>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <EventList events={events} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents= {numberOfEvents} />
      </div>
    );
  }
}

export default App;
