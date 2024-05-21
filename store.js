/**
 * @typedef {object} item
 * @prop {number} value
 */

/**
 * @typedef {object} state
 * @prop {item} wind
 * @prop {item} temperature
 * @prop {item} humidity
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

export const Action = ''

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

const initial = {
    wind:{
        value: 1,
    },
    temperature:{
        value: 1,
    },
    humidity:{
        value:1,
    }
};

/**
 * @type {Array<state>}
 */
 const state = [initial]

 /**
 * @type {Array<Notify>}
 */
 let notifiers = [];

 /**
  * 
  * @param {Action} action
  * @returns {} 
  */
export  const update = (action) => {
        if(typeof action !== 'function'){
            throw new Error('action is required to be function')
        }
        const prev = Object.freeze({...state[0]});
        const next = Object.freeze({...action(prev)});

        const handler = (notify) => notify(prev,next)

        notifiers.forEach(handler)
        state.unshift(next);
    }
    /**
     * @param {Notify}Notify
     * ret
     */
export   const subscribe = (notify) => {
    notifiers.push(notify);

    const unsubscribe = () => {
        const handler = (current) => current !== notify
      const result = notifiers.filter(handler)
      notifiers = result;  
    };

    return unsubscribe;
};
   




