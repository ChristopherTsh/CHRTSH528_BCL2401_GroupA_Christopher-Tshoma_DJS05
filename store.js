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
  * 
  * @param {Action} action
  * 
  */
export  const update = (action) => {
        if(typeof action !== 'function'){
            throw new Error('action is required to be function')
        }
        const prev = Object.freeze({...state[0]});
        const next = Object.freeze({...action(prev)});

        const handler = (notify) => notify(next,prev)

        notifiers.forEach((notify) => notify(next, prev));
        state.count = next.count;
    }
   /**
 * @param {Notify} notify
 * @returns {EmptyFn}
 */

export   const subscribe = (notify) => {
    notifiers.push(notify);

    const unsubscribe = () => {
        const handler = (current) => current !== notify
        return handler;
    };

    return unsubscribe;
};
 
/**
 * @returns {state}
 */
export const getState = () => {
    return { ...state };
};




