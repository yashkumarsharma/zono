import { ActionTypes } from '../constants'

export const getProductCatalog = payload => {
  return ({ type: ActionTypes.GET_PRODUCTS, payload })
}

export const setProductCatalog = payload => {
  return ({ type: ActionTypes.SET_PRODUCTS, payload })
}
