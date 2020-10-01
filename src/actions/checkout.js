import { ActionTypes } from '../constants'

export const onCheckoutSuccess = payload => {
  return ({ type: ActionTypes.CHECKOUT_SUCCESS, payload })
}

export const resetCheckout = payload => {
  return ({ type: ActionTypes.RESET_CHECKOUT, payload })
}
