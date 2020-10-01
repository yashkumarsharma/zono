import { ActionTypes } from '../constants'

export const updateCart = payload => {
  return ({ type: ActionTypes.UPDATE_CART, payload })
}
