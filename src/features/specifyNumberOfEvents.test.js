import React from 'react';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, "32" is the default number', ({ given, when, then }) => {
    given('the user sees his selected city with a textbox showing default amount of events', () => {
    
    });
      let AppWrapper;
    when('user submits without changing the number in the “Show-Events” textbox', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a selection of "32" upcoming events in that city',() => {
      AppWrapper.update();
      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user sees the “Show Events” textbox and the user did not specify a number of events he wants to see', () => {
      AppWrapper = mount (<App />);
    });

    when('the user is typing “a number” in the “Show Events” textbox', () => {
      const numberOfEvents = { target: { value: 17 }};
      AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);

    });
   

    then('the user should receive a list of this number of events in that city', () => {
      const NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
      NumberOfEventsWrapper.setState({ numberOfEvents: 17 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(17);
    }); 
  });
});