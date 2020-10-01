import React from 'react'
import { connect } from 'react-redux'

import { onCheckoutSuccess, resetCheckout } from '../../actions'
import { getCart } from '../../reducers/cart'
import { getProductsById } from '../../reducers/productCatalog'
import { isCheckoutSuccess } from '../../reducers/checkout'
import { Checkout } from '../../components'

const Container = props => {
  const { cart, products, onCheckoutSuccess, isCheckoutSuccess, resetCheckout } = props

  const getGrandTotal = () => {
    const totalPrice = products.map(product => parseInt(product.price) * parseInt(cart[product.id]))
    return totalPrice.reduce((a, b) => a + b, 0)
  }

  const totalItems = products.length
  const grandTotal = getGrandTotal()

  return (
    <Checkout
      grandTotal={grandTotal}
      isCheckoutSuccess={isCheckoutSuccess}
      onCheckoutSuccess={onCheckoutSuccess}
      resetCheckout={resetCheckout}
      totalItems={totalItems}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  const cart = getCart(state).toJS()
  return {
    cart,
    // This can be refactored to return only the required product keys
    products: getProductsById(state, Object.keys(cart)).toJS(),
    isCheckoutSuccess: isCheckoutSuccess(state),
  }
}

export default connect(mapStateToProps, { onCheckoutSuccess, resetCheckout })(Container)
