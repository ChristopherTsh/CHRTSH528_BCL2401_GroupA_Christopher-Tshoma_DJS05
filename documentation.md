File: index.js

This file exports the update, subscribe, getState, and Store types.

Function: update

This function updates the state based on the action provided. It first checks if the action is a function. If it is, it creates a new state by calling the action with the previous state. Then it notifies all subscribers about the state change.

Function: subscribe

This function subscribes a notify function to state changes. It returns an unsubscribe function that can be used to unsubscribe the notify function.

Function: getState

This function returns the current state.

Type: Store

This type defines a store with update and subscribe properties.

File: action.js

This file exports the Action type.

Type: Action

This type defines a function that takes the current state as an argument and returns a new state.

File: scripts/store.js

This file defines the state management system. It exports the update, subscribe, getState, and Store types.

Variable: state

This variable stores the current state.

Variable: notifiers

This variable stores all the notify functions that are subscribed to state changes.

Function: update

This function updates the state based on the action provided. It first checks if the action is a function. If it is, it creates a new state by calling the action with the previous state. Then it notifies all subscribers about the state change.

Function: subscribe

This function subscribes a notify function to state changes. It returns an unsubscribe function that can be used to unsubscribe the notify function.

Function: getState

This function returns the current state.

Type: state

This type defines the state object with a single property count.

Type: Notify

This type defines a callback function that gets called whenever the state changes. It receives the next state and the previous state as arguments.

Type: EmptyFn

This type defines an empty function.

Type: Store

This type defines a store with update and subscribe properties.

Variable: initial

This variable initializes the state to {count: 0}.

Variable: state

This variable stores the current state.

Variable: notifiers

This variable stores all the notify functions that are subscribed to state changes.

Function: update

This function updates the state based on the action provided. It first checks if the action is a function. If it is, it creates a new state by calling the action with the previous state. Then it notifies all subscribers about the state change.

Function: subscribe

This function subscribes a notify function to state changes. It returns an unsubscribe function that can be used to unsubscribe the notify function.

Function: getState

This function returns the current state.

Type: state

This type defines the state object with a single property count.

Type: Notify

This type defines a callback function that gets called whenever the state changes. It receives the next state and the previous state as arguments.

Type: Action

This type defines a function that takes the current state as an argument and returns a new state.

Type: EmptyFn

This type defines an empty function.

Type: Store

This type defines a store with update and subscribe properties.