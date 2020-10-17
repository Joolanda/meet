Feature: Specify Number of events

Scenario: When user hasn’t specified a number, "32" is the default number
Given the user sees his selected city with a textbox showing default amount of events
When user submits without changing the number in the “Show-Events” textbox 
Then the user should see a selection of "32" upcoming events in that city

Scenario: User can change the number of events they want to see
Given the user sees the “Show Events” textbox and the user did not specify a number of events he wants to see
When the user is typing “a number” in the “Show Events” textbox 
Then the user should receive a list of this number of events in that city