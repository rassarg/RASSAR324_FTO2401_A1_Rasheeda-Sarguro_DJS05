# Tally App

The project uses Redux to manage the state of the count. It consists of a Redux store, a reducer to handle state changes, and action creators to dispatch the actions. This project demonstrates state management and logging to the console.

## File Structure

- `scripts/actions.js`: Defines the actions
- `scripts/index.js`: Sets up the store, subscribes to state changes, dispatches actions, and logs changes to the console.
- `reducer.js`: Defines the counterReducer to handle state changes based on dispatched actions.

## Run

1. Install Node.js
2. Install Live Server extension in VSCode
3. Navigate to index.html in file tree, right-click and open with Live Server

## Approach

Initially I sought out clarification from colleagues and my coach on how to approach this project as it took me a very long time to understand it to begin with.
Once I had a brief walkthrough with them, to complete this project, I followed along with the video given in the LMS, creating my actions, then my reducer, and finally the store that would apply this logic, ultimately adding a console log as per the project requirements. I adapted the code that was demonstrated from arrow functions to named functions which is a style that I understand better.

## Challenges

It took me a while to understand this project at all. I had to watch and re-watch the LMS videos, as well find other resources. Eventually with the guidance of my coach and help from my colleagues, I finally understood what needed to be done.
The initial setup, understanding the flow of actions, reducers, and store updates all took me some time to grasp. Once I did though, it was fairly straightforward to implement the logic. It just needed to be broken up and understood in blocks of code, as well as understanding how they all worked together.

## Scenarios

### Scenario 1

**GIVEN** no interactions have been performed yet  
**WHEN** the `getState` method is run  
**AND** the result is logged to the console  
**AND** the browser console is open  
**THEN** the state should show a count of 0

### Scenario 2

**GIVEN** no interactions have been performed yet  
**WHEN** an `ADD` action is dispatched  
**AND** another `ADD` action is dispatched  
**AND** the browser console is open  
**THEN** the state should show a count of 2

### Scenario 3

**GIVEN** the current count in the state is 2  
**WHEN** a `SUBTRACT` action is dispatched  
**AND** the browser console is open  
**THEN** the state should display a count of 1

### Scenario 4

**GIVEN** the current count in the state is 1  
**WHEN** a `RESET` action is dispatched  
**AND** the browser console is open  
**THEN** the state should display a count of 0
