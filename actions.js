/**
 * @typedef {object} state
 * @prop {number} count
 */

/**
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
 * @param {state} state
 * @returns {state}
 */
export const reset = (state) => {
    return {
        ...state,
        count: 0,
    };
};
