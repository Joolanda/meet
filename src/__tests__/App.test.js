import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1)
  })
  
});

// new version of integration testing
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });
  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });
  // test Task 4.4
   test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  }); 
 
  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
 }); 
});
// older version of the integration tests
/* test('get list of events after the user selects a city', async () => {
  const AppWrapper = mount(<App />);
  AppWrapper.instance().updateEvents = jest.fn();
  AppWrapper.instance().forceUpdate();
  const CitySearchWrapper = AppWrapper.find(CitySearch);
  CitySearchWrapper.instance().handleItemClicked('Berlin, Germany');
  expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
  expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(
    'Berlin, Germany'
  );
  AppWrapper.unmount();
});
test('change state after getting list of events', async () => {
  const AppWrapper = shallow(<App />);
  AppWrapper.instance().updateEvents('');
  await AppWrapper.update();
  expect(await AppWrapper.state('events')).toStrictEqual(mockData);
  AppWrapper.unmount();
}); */