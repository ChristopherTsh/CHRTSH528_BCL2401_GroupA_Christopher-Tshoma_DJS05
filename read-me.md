
## Implementation

### `store.js`

This file contains the implementation of the Redux-inspired store.

- **State**: Holds the current state of the counter.
- **Notifiers**: An array of functions to be called whenever the state changes.
- **update**: A function to update the state based on an action.
- **subscribe**: A function to subscribe to state changes.
- **getState**: A function to get the current state.

### `actions.js`

This file contains action creators for modifying the state.

- **add**: Increments the count.
- **subtract**: Decrements the count.
- **reset**: Resets the count to 0.

### `scripts.js`

This file demonstrates the use of the store and actions.

- **logHandler**: A handler to log state changes to the console.
- **unsubscribeLog**: Unsubscribes the log handler to stop logging state changes.

### `index.html`

This file is the HTML structure to load the `scripts.js`.


## Approach Overview

The approach follows the basic principles of Redux:
- **Store**: Holds the state and manages state changes.
- **Reducer**: A pure function that takes the current state and an action and returns the new state.
- **Actions**: Plain objects that describe the changes to be made to the state.
- **Subscribe**: Allows functions to be called whenever the state changes.

The `Store` class includes methods to get the current state (`getState`), dispatch actions (`update`), and subscribe to state changes (`subscribe`). The `actions.js` file includes action creators to modify the state accordingly.

This project effectively demonstrates core state management concepts using a simplified Redux-inspired store, emphasizing functional programming principles and efficient state handling.
