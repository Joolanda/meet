import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });
  // rewrote to test "load a list of events by default.
  test('renders textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  test('show input label with number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
  });
  
  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('#numberOfEvents__input').prop('value')).toBe(numberOfEvents);
  });
  // save events and locations to the state, renders a list of 32 events by default
  test('change state when input changes', () => {
    const eventCount = { target: { value: 32 } };
    NumberOfEventsWrapper.find("#numberOfEvents__input").simulate('change', eventCount
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

});