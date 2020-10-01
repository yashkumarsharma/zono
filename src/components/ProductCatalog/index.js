import React from 'react'

import {
  SingleProduct, // better name?
} from '../'

export default ({ productList = [], updateQuantity }) => {
  console.log('props received', productList)


  const renderProducts = () => productList.map(renderSingleProduct)

  const renderSingleProduct = (product, index) => {
    const { id, icon, name, price } = product
    console.log('single product', product)
    // Single Product Props
    // Name, Price and Quantity for now
    return (
      <SingleProduct
        icon={icon}
        id={id}
        key={index}
        name={name}
        price={price}
        quantity={0} // Need to set this
        updateQuantity={updateQuantity}
      />
    )
  }

  // Usually a helper library like loadsh may/may not be used
  if(!productList.length) return 'No Products found'
  return renderProducts()
}