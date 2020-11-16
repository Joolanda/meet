import React from 'react';
import { shallow, mount } from 'enzyme';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import App from "../App";
import CitySearch from '../CitySearch';


describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });
  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  test('renders text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });
  test('change state when text input changes', () => {
    const eventObject = { target: { value: 'Berlin' }};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });
  test('renders a list of suggestions', () => {
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(suggestions.length);
  });
    // update
    test('renders a list of suggestions correctly', () => {
      CitySearchWrapper.find('input[type="text"]').simulate("change", {
        target: {
          value: "Berlin",
        },
      });
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });

 // refactored in Task 4.4
    test("selecting a suggestion should change query state", () => {
      CitySearchWrapper.setState({
        query: '',
        suggestions: locations,
      });
      const suggestions = CitySearchWrapper.state('suggestions');
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
      expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
    });
});

describe('<CitySearch /> integration', () => {  
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });
  test('get a list of cities when the user searches for Berlin', () => {
  CitySearchWrapper.find('.city').simulate('change', {
   target: { value: 'Berlin' },
  });
  expect(CitySearchWrapper.state('suggestions')).toEqual(['Berlin, Germany']);
  
  });
  test("suggestions list will appear upon having a focus on city input field", () => {
    CitySearchWrapper.setState({
      query: '',
      suggestions: locations,
    });
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({});
  });
}); 
