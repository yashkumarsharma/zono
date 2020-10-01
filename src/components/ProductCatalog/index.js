import React from 'react'

import {
  SingleProduct, // better name?
} from '../'

export default ({ productList = [], updateCart, cart }) => {

  const renderProducts = () => productList.map(renderSingleProduct)

  const renderSingleProduct = (product, index) => {
    const { id, icon, name, price } = product
    const quantity = cart?.[id] ? cart?.[id] : 0
    return (
      <SingleProduct
        icon={icon}
        id={id}
        key={index}
        name={name}
        price={price}
        quantity={quantity}
        updateCart={updateCart}
      />
    )
  }

  if(!productList.length) return 'No Products found'
  return renderProducts()
}