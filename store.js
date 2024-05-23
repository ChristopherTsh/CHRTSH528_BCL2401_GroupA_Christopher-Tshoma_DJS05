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
 * @param {Action}
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
 */

const initial = {count: 0};
   

/**
 * @type {state}
 */
 const state = [initial]

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
        const prev = Object.freeze({...state[0]});
        const next = Object.freeze({...action(prev)});

         // Notify all subscribers about the state change
        notifiers.forEach((notify) => notify(next, prev));
        state.count = next.count;
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
        const handler = (current) => current !== notify
        return handler;
    };

    return unsubscribe;
};
 
/**
 * Returns the current state
 * @returns {state}
 */
export const getState = () => {
    return { ...state };
};



