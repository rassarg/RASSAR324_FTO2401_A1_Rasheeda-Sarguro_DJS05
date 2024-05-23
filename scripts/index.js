import counterReducer from "./reducer.js";
import { add, subtract, reset } from "./actions.js";

const initialState = { count: 0 };
// Function to create a store with a reducer and an initial state
const createStore = function (reducer, initialState) {
  let state = initialState;
  let listeners = [];

  // Get the current state
  const getState = function () {
    return state;
  };

  // Dispatch actions to the reducer to update state
  const dispatch = function (action) {
    state = reducer(state, action);
    // Notify listeners of state change
    listeners.forEach(function (listener) {
      listener();
    });
  };

  // Subscribe to state changes, adding to listener array
  const subscribe = function (listener) {
    listeners.push(listener);

    // Return a function to unsubscribe from state changes, removing from listener array
    const unsubscribe = function () {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
    return unsubscribe;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

// Create store with the counterReducer and initial state
const store = createStore(counterReducer, initialState);

// Subscribe to state changes and log them to the console
store.subscribe(function () {
  console.log("State updated:", store.getState());
});

// Scenario 1
console.log("Scenario 1: Initial State Verification");
console.log(store.getState());

// Scenario 2
console.log("Scenario 2: Incrementing the Counter");
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());

// Scenario 3
console.log("Scenario 3: Decrementing the Counter");
store.dispatch(subtract());

// Scenario 4
console.log("Scenario 4: Resetting the Counter");
store.dispatch(reset());
