import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';


// import { extractSummaries } from '../api';

// const summaries = extractSummaries(mockData);
//import { extractEvents } from '../api';

//const EventDetails = extractEvents(mockData);

describe('<Event/> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('tst that component is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
    });

  test('test that event summary is rendered', () => {
    expect(EventWrapper.find('.event__summary')).toHaveLength(1);
  });

  test('test that event summary with date and time is rendered', () => {
    expect(EventWrapper.find('.event__summary--dateTime')).toHaveLength(1);
  });
  
  test('test that event__summary children are rendered', () => {
    expect(EventWrapper.find('.event__summary--dateTime').children()).toHaveLength(1);
  });

  test('test that button to show or hide more details is rendered', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('show more details when a user clicks on the button',() => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
   });
});