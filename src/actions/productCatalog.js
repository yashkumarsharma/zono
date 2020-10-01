import { ActionTypes } from '../constants'

export const getProductCatalog = payload => {
  console.log('action called here ActionTypes.GET_PRODUCTS', payload, ActionTypes.GET_PRODUCTS)
  return ({ type: ActionTypes.GET_PRODUCTS, payload })
}

export const setProductCatalog = payload => {
  console.log('action called here ActionTypes.SET_PRODUCTS', payload)
  return ({ type: ActionTypes.SET_PRODUCTS, payload })
}
