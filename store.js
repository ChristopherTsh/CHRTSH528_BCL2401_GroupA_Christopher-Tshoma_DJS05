/**
 * @typedef {object} state
 * @prop {number} count
 */

/**
 * @callback Notify
 * @param {state} next
 * @param {state} prev
 */

/**
 * @callback Action
 * @param {state}
 * @returns {State}
 */

export const Notify = {};
export const Action = {};

/**
 * @callback update
 * @param {Action} action
 */


/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @callback EmptyFn
 */
/**
 * @typedef {object} Store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 * @prop {function(): state} getState
 */

const initial = {count: 0};
   

/**
 * @type {state}
 */
 let currentState = initial

 /**
 * @type {Array<Notify>}
 */
 let notifiers = [];

 /**
  * Updates the state based on the action provided
  * @param {Action} action
  * 
  */
export  const update = (action) => {
        if(typeof action !== 'function'){
            throw new Error('action is required to be function')
        }
        const prev = Object.freeze({...currentState});
        const next = Object.freeze({...action(prev)});

         // Notify all subscribers about the state change
        notifiers.forEach((notify) => notify(next, prev));
        currentState = next;
    }
   /**
    * Subscribes a notify function to state changes
 * @param {Notify} notify
 * @returns {EmptyFn}
 */

export   const subscribe = (notify) => {
    notifiers.push(notify);

    // Return a function to unsubscribe the notify function
    const unsubscribe = () => {
        notifiers  = notifiers.filter((current) => current !== notify);
           };

    return unsubscribe;
};
 
/**
 * Returns the current state
 * @returns {state}
 */
export const getState = () => {
    return { ...currentState };
};



