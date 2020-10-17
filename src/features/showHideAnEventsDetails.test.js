import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    given('the list of events has been loaded', () => {

    });

    and('app loaded', () => {

    });

    when('the user did not click the „Show Details“ yet', () => {

    });

    then('the event elements are collapsed', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    given('app loaded', () => {

    });

    and('the list of events has been loaded', () => {

    });

    when('the user clicks the button „show Details“', () => {

    });

    then('the event element should expand and show more information', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    given('app loaded', () => {

    });

    and('event element is expanded and shows details', () => {

    });

    when('the user clicks the „hide details“ button', () => {

    });

    then('the event element details should collapse', () => {

    });
  });

});
