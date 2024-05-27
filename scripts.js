import {subscribe, update, getState} from './store.js';
import { add, subtract, reset } from './actions.js';

// Handler to log the state to the console
const logHandler= (prev, next ) => console.log('State changed from', prev, 'to', next)
const unsubscribeLog = subscribe(logHandler);

// Scenario 1: Initial State Verification
console.log('Initial State:', getState());

// Scenario 2: Incrementing the Counter
update(add); // Increments the count by 1
update(add); // Increments the count by another 1
console.log('State after two increase:', getState());

// Scenario 3: Decrementing the Counter
update(subtract);// Decrements the count by 1
console.log('State after one decrease:', getState());

// Scenario 4: Resetting the Counter
update(reset); // Resets the count to 0
console.log('State after reset:', getState());

// Unsubscribe the logHandler to stop logging further state changes 
unsubscribeLog();


