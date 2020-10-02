import React from 'react'

import {
  SingleProduct, // better name?
} from '../'

export default ({ productList = [], updateCart, cart, isLoading }) => {

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

  if(isLoading) return (
    <div className='centerMessage'>
      Products are being loaded...
    </div>
  )

  if(!productList.length) return (
    <div className='centerMessage'>
      No Products found
    </div>
  )
  return renderProducts()
}