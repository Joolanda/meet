import React, { Component } from 'react';
import { extractLocations } from './api';
import { mockData } from './mock-data';

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: 'Berlin, German', 
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().IndexOf(value.toUpperCase()) > -1;
    });
    return this.setState({
      query: value,
      suggestions,
    });
  };
  handleItemClicked = (suggestion) => {
    this.setState({ 
      query: suggestion, 
      suggestions: [],
     });
  };

  render() {
    return (
      <div className="CitySearch">
        <h1> Meet App</h1>
        <h3>Choose your nearest city</h3>
        <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {
           this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
           {suggestion}
            </li>
            ))
          }
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
              </li>;
        </ul>
       </div>

    );
  }
}

export default CitySearch;