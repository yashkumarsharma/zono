import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getProductCatalog } from '../../actions'
import { ProductCatalog } from '../../components'
import { getAllProducts, isProductCatalogLoading } from '../../reducers/productCatalog'

const Container = (props) => {
  const [cartItems, setCartItems] = useState({})
  const { getProductCatalog, isLoading, productList } = props

  useEffect(() => {
    if(isLoading) getProductCatalog()
  }, [getProductCatalog, isLoading])

  const updateQuantity = (id, quantity) => {
    if(quantity < 0) return
    const tempCart = {...cartItems}
    if(!!tempCart[id]) { delete tempCart[id] }

    let currentItem = {}
    if(quantity > 0) {
      currentItem = { [id]: quantity }
    } 

    const updatedCart = { ...tempCart, ...currentItem }
    setCartItems(updatedCart) // Order will not be maintained :/
  }

  if(isLoading) return 'Products are being loaded...'

  return (
    <ProductCatalog
      productList={productList}
      updateQuantity={updateQuantity}
      cartItems={cartItems} // this looks like an overhead, rivist// Todo
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log('What is state', state)
  return {
    productList: getAllProducts(state).toJS() ,
    isLoading: isProductCatalogLoading(state),
  }
}

export default connect(mapStateToProps, { getProductCatalog })(Container)
