import { Map, List } from 'immutable'
import { ActionTypes } from '../constants/index'
import { createReducer } from '../utilities/helper'

export const initialState = Map({
  products: List([]),
  isLoading: true,
})

export default {
  productCatalog: createReducer(initialState, {
    [ActionTypes.SET_PRODUCTS]: (state, action) => {
      const { data } = action.payload
      console.log('Reached reducer', data)
      return state.withMutations(stateMap => {
        stateMap.set('products', List(data))
        stateMap.set('isLoading', false)
      })
    },
  }),
}

export function isProductCatalogLoading({ productCatalog }) {
  return productCatalog.get('isLoading')
}

export function getAllProducts({ productCatalog }) {
  return productCatalog.get('products')
}
