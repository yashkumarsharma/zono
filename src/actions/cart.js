import { ActionTypes } from '../constants'

export const updateCart = payload => {
  console.log('action called here UPDATE_CART', payload, ActionTypes.UPDATE_CART)
  return ({ type: ActionTypes.UPDATE_CART, payload })
}
