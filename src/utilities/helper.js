/**
 * Generate reducer.
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @returns {function}
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}


export const persistState = (whiteList, state) => {
  if (localStorage && whiteList) {
    whiteList.forEach(key => {
      delete state[key].isLoading // So that productCatalog can be refreshed
      localStorage.setItem(key, JSON.stringify(state[key]))
    })
  }
}

export function getInitialState(key) {
  try {
    let initialState
    if (localStorage) {
      try {
        initialState = JSON.parse(localStorage.getItem(key))
      }
      catch (e) {
      }
    }
    return initialState
  }
  catch (e) {
    return e
    // digest error silently
  }
}
