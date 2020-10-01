import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getProductCatalog, updateCart } from '../../actions'
import { ProductCatalog } from '../../components'
import { getAllProducts, isProductCatalogLoading } from '../../reducers/productCatalog'
import { getCart } from '../../reducers/cart'

const Container = (props) => {
  const { cart, getProductCatalog, isLoading, productList, updateCart } = props

  useEffect(() => {
    if(isLoading) getProductCatalog()
  }, [getProductCatalog, isLoading])


  if(isLoading) return 'Products are being loaded...'
  return (
    <ProductCatalog
      productList={productList}
      updateCart={updateCart}
      cart={cart} // Scope of refactoring
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    productList: getAllProducts(state).toJS(),
    isLoading: isProductCatalogLoading(state),
    cart : getCart(state).toJS()
  }
}

export default connect(mapStateToProps, { getProductCatalog, updateCart })(Container)
