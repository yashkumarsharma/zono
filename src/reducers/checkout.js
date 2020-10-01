import { Map } from 'immutable'
import { ActionTypes } from '../constants/index'
import { createReducer } from '../utilities/helper'

export const initialState = Map({
  checkout: Map({}),
  isCheckoutSuccess: false,
})

export default {
  checkout: createReducer(initialState, {
    [ActionTypes.RESET_CHECKOUT]: () => initialState,
    [ActionTypes.CHECKOUT_SUCCESS]: (state, action) => {
      const { name, email, mobile } = action.payload
      return state.withMutations(stateMap => {
        stateMap.set('checkout', Map({ name, email, mobile }))
        stateMap.set('isCheckoutSuccess', true)
      })
    },
  }),
}

export function isCheckoutSuccess({ checkout }) {
  return checkout.get('isCheckoutSuccess')
}
