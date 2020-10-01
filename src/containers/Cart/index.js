import React from 'react'
import { connect } from 'react-redux'

import { getCart } from '../../reducers/cart'
import { getProductsById } from '../../reducers/productCatalog'
import { Cart } from '../../components'

const Container = props => {
  const { cart, products } = props

  return (
    <Cart
      cart={cart}
      products={products}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  const cart = getCart(state).toJS()
  return {
    cart,
    products: getProductsById(state, Object.keys(cart)).toJS(),
  }
}

export default connect(mapStateToProps, {})(Container)
