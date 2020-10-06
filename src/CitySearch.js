import React, { Component } from 'react';
import { extractLocations } from './api';
import { mockData } from './mock-data';

class CitySearch extends Component {
  state = {
    locations: this.props.location,
    query: 'Berlin, German', 
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }
  handleItemClicked = (value) => {
    this.setState({ query: value });
  }

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
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}>onClick={() => this.handleItemClicked(suggestion)}</li>
          ))}
        </ul>
       </div>

    );
  }
}

export default CitySearch;