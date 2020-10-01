import React from 'react'

import './style.css'

export default (props) => {
  const {
    icon,
    id,
    isReview = false,
    name,
    price,
    quantity,
    total,
    updateCart = () => {},
  } = props

  const renderQuantity = () => {
    const isMinusButtonDisabled = quantity === 0
    return (
      <div>
        <input disabled value={quantity} />
        {!isReview && (
          <>
            <button onClick={() => updateCart({ id, quantity: quantity + 1})}> + </button>
            <button onClick={() => updateCart({ id, quantity: quantity - 1})} disabled={isMinusButtonDisabled}> - </button>
          </>
        )}
        {isReview && (
          <div> {total} </div>
        )}
      </div>
    )
  }

  return (
    <div className='productWrapper'>
      <div> <img alt={name} className='productIcon' src={icon} /> </div>
      <div> {name} </div>
      <div> {price} </div>
      <div> {renderQuantity()} </div>      
    </div>
  )
}
