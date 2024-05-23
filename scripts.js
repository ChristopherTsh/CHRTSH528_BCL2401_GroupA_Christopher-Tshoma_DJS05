import {subscribe, update, getState} from './store.js'
import { add, subtract, reset } from './actions.js';


const logHandler= (prev, next ) => console.log('State changed from', prev, 'to', next)
const unsubscribeLog = subscribe(logHandler)

console.log('Initial State:', getState());

update(add);
update(add);

update(subtract);

update(reset);

unsubscribeLog();


