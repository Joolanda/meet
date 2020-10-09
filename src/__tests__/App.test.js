import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import Event from '../Event';
import { mockData } from '../mock-data';
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

describe('<App /> integration', () => {
  test('get list of events after the user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked("Berlin, Germany");
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith('Berlin, Germany'
    );
    AppWrapper.unmount();
  });

  //create a test that will get data from the mock API
  test('change state after getting list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents('');
    await AppWrapper.update();
    expect(await AppWrapper.state('events')).toStrictEqual(mockData);
    AppWrapper.unmount();
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: mockData,
    });
    expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });

});


