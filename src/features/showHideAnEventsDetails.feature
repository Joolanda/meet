feature: Show or hide an events details

Scenario: An event element is collapsed by default
Given the user has filtered events by city 
And sees the list of upcoming events from their location
When user hasn’t clicked on a button of a specific event to show more details
Then the user should see a short description of each upcoming event by default

Scenario: User can expand an event to see its details
Given the user sees a list of the upcoming events that take place
And sees per event a details button
When the user chooses an upcoming event
and clicks on its details button 
Then the user should receive more details of this upcoming event

Scenario 3: User can collapse an event to hide its details
Given the user sees more details of an upcoming event
When the user clicks outside the event box or on a close button
Then the user should return to the list of events with short description