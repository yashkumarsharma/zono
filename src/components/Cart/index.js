import React from 'react'
import { Link } from 'react-router-dom'

import { SingleProduct } from '../'
import './style.css'

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

  const renderCheckOutButton = () => (
    <div className='checkoutButton'>
      <Link to='/checkout'> Checkout </Link>
    </div>
  )

  if(!products.length) return 'Nothing is present in the cart...'
  return (
    <>
      {renderProducts()}
      {renderCheckOutButton()}
    </>
  )
}
