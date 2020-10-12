import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  // rewrote to test "load a list of events by default.
  test('renders textbox with number of events', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  // test('renders a list of 32 events by default ', () => {
  //   const NumberOfEventsWrapper = shallow(
  // }
});