import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';




class App extends Component {
  render() {
    return (
      < div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventList />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
