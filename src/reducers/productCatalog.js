import { Map, List } from 'immutable'
import { ActionTypes } from '../constants/index'
import { createReducer, getInitialState } from '../utilities/helper'

const storedState = getInitialState('productCatalog')
let products = List([])

if(storedState) {
  products = List(storedState.products)
}

export const initialState = Map({
  products: products,
  isLoading: true,
})

export default {
  productCatalog: createReducer(initialState, {
    [ActionTypes.SET_PRODUCTS]: (state, action) => {
      const { data } = action.payload
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

export function getProductsById({ productCatalog }, productIds) {
  return productCatalog.get('products').filter(product => productIds.includes(product.id))
}
