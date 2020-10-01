import { Map } from 'immutable'
import { ActionTypes } from '../constants/index'
import { createReducer } from '../utilities/helper'

export const initialState = Map({
  cart: Map({}),
})

export default {
  cart: createReducer(initialState, {
    [ActionTypes.CHECKOUT_SUCCESS]: () => initialState,
    [ActionTypes.UPDATE_CART]: (state, action) => {
      const { id, quantity } = action.payload

      // negatives not allowed
      if(quantity < 0) return state

      // delete the item from cart, if quantity is 0
      if(quantity === 0) return state.removeIn(['cart', id])

      // Updating the quantity of cart
      return state.setIn(['cart', id], quantity)
    },
  }),
}

export function getCart({ cart }) {
  return cart.get('cart')
}
