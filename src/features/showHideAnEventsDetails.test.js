import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
const locations = extractLocations(mockData)
defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    let CitySearchWrapper;
    given('the user has filtered events by city', () => {
    CitySearchWrapper.shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
    //   );

      // test('render text input', () => {
      //   const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
      //   expect(CitySearchWrapper.find('.city')).toHaveLength(1);
      // });
      // test('renders a list of suggestions', () => {
      //   const CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />
      //   );
      //   const suggestions = CitySearchWrapper.state('suggestions');
      //   expect(CitySearchWrapper.find('.


    });

    and('sees the list of upcoming events from their location', () => {
    expect CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);

    });

    when('user hasn’t clicked on a button of a specific event to show more details', () => {

    });

    then('the user should see a short description of each upcoming event by default', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    given('the user sees a list of the upcoming events that take place', () => {

    });

    and('sees per event a details button', () => {

    });

    when('the user chooses an upcoming event', () => {

    });

    and('clicks on its details button', () => {

    });

    then('the user should receive more details of this upcoming event', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user sees more details of an upcoming event', () => {

    });

    when('the user clicks outside the event box or on a close button', () => {

    });

    then('the user should return to the list of events with short description', () => {

    });
  });




});
