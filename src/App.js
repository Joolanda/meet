import React, { Component } from 'react';
import "./nprogress.css";
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';
import { checkToken, getToken } from './api';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import EventGenre from './EventGenre';

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
// retrieving data cities 4.9
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
  const { locations, numberOfEvents, events } = this.state;
  return (
    <div className="App">
      <h1>Meet App</h1>
      <h4>Choose your nearest city</h4>
       <CitySearch updateEvents={this.updateEvents} locations={locations} />
       <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
          />   
          <div classname="data-vis-wrapper">  
           <EventGenre events={events} />
           <ResponsiveContainer height={400} >
             <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend verticalAlign="bottom" height={36} />
              <Scatter name=": number of events per city" data={this.getData()} fill="#bc5090" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>  
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
