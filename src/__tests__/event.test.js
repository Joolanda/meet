import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


//import { extractEvents } from '../api';
// import { mockData } from'../mock-data';

//const EventDetails = extractEvents(mockData);

describe('<Event /> component', () => {
  const EventWrapper = shallow(<Event />);
  expect(EventWrapper.find(Event)).toHaveLength(1);
});



