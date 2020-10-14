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
componentDidMount() {
  this.mounted = true;
  getEvents().then((response) => {
    if(this.mounted) {
    this.setState({ events: response.events, locations: response.locations });
    }
  });
}
componentWillUnmount(){
  this.mounted = false;
}
// task part 3: you'll need to refactor the UpdateEvents fct
// to take 2 parameters "location" and "eventCount" and in the state 32 number of events
updateEvents = (location) => {
  //const {  numberOfEvents } =this.state;
  getEvents().then((response) => {
    const locationEvents =
      location === 'all'
        ? response.events
        : response.events.filter((event) => event.location === location);
    const events = locationEvents.slice(0, numberOfEvents); 
    return this.setState({
      events : events,
      currentLocation: location,
    });
  });
}

  render() {

    return (
      < div className="App">
        <CitySearch updateEvents={this.updateEvents} locations={this.state.locations} />
        <EventList events={this.state.events} />
        <NumberOfEvents numberOfEvents= {this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
