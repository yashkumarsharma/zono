import React from 'react'

import { SingleProduct } from '../'

export default (props) => {
  const { cart, products } = props

  const renderProducts = () => products.map(renderSingleProduct)

  const renderSingleProduct = (product, index) => {
    const { id, icon, name, price } = product
    const quantity = cart?.[id] ? cart?.[id] : 0
    const total = parseInt(quantity) * parseFloat(price) 
    return (
      <SingleProduct
        icon={icon}
        id={id}
        isReview={true}
        key={index}
        name={name}
        total={total}
        quantity={quantity}
      />
    )
  }

  if(!products.length) return 'Nothing is present in the cart...'
  return renderProducts()
}
