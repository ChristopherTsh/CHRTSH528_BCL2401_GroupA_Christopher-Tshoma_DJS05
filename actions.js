/**
 * @typedef {object} state
 * @prop {number} count
 */

/**
 *  Action to increment the count
 * @param {state} state
 * @returns {state}
 */
export const add = (state) => {
    return {
        ...state,
        count: state.count + 1,
    };
};

/**
 * Action to decrement the count
 * @param {state} state
 * @returns {state}
 */
export const subtract = (state) => {
    return {
        ...state,
        count: state.count - 1,
    };
};

/**
 *  Action to reset the count
 * @param {state} state
 * @returns {state}
 */
export const reset = (state) => {
    return {
        ...state,
        count: 0,
    };
};
