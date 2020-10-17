
import React from 'react';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import { extractLocations } from "../api";
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
const locations = extractLocations(mockData);

defineFeature(feature, test => {


  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    let AppWrapper;
     given('the user has filtered events by city', () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    //  });
    // let AppWrapper;
    //   AppWrapper.update();
    //   expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    //CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);

    //      then('the user should see the list of upcoming events', () => {
    //   AppWrapper.update();
    //   expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    //   });

    });

    and('sees the list of upcoming events from their location', () => {
    //expect CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
    // AppWrapper.update();
    //   expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('user hasn’t clicked on a button of a specific event to show more details', () => {
      let AppWrapper;
      AppWrapper = mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the user should see a short description of each upcoming event by default', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;
    // AppWrapper = mount(<App />);

    given('the user sees a list of the upcoming events that take place', () => {

      // AppWrapper.update();
      // expect(AppWrapper.find('.event')).toHaveLength(mockData.events.length);
      // AppWrapper = mount(<App />);
      // expect(AppWrapper.find('.event .details-btn')).toHaveLength(1);
 
  

    });

    and('sees per event a details button', () => {
      // let AppWrapper;
      // AppWrapper = mount(<App />);
      //  AppWrapper.update();

      //  expect(AppWrapper.find('.event .details-btn')).toHaveLength(1);
    });

    when('the user chooses an upcoming event', () => {

    });

    and('clicks on its details button', () => {

    });

    then('the user should receive more details of this upcoming event', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user sees more details of an upcoming event', () => {
    AppWrapper = mount(<App />);
    });

    when('the user clicks outside the event box or on a close button', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the user should return to the list of events with short description', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });

});


