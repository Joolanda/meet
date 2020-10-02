import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

describe('<App /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{}, {}, {}, {}] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});