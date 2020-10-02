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
      <div className='inlineBlockDiv quantityWrapper'>
        {!isReview && <button className='button' onClick={() => updateCart({ id, quantity: quantity - 1})} disabled={isMinusButtonDisabled}> - </button>}
        <span className='quantity'>{quantity}</span>
        {!isReview && <button className='button' onClick={() => updateCart({ id, quantity: quantity + 1})}> + </button>}
      </div>
    )
  }

  return (
    <div className={`productWrapper ${isReview ? 'reviewMode' : ''}`}>
      <div className='inlineBlockDiv'> <img alt={name} className='productIcon' src={icon} /> </div>
      <div className='inlineBlockDiv'>
        <div className='productName'> {name} </div>
        {!isReview && <div> Price: {price} {renderQuantity()} </div>}
        {isReview && (<div>
          <span> Qty: {quantity} </span>
          <span className='reviewTotal'> Total: {total} </span>
        </div>)}
      </div>
      <hr className='separator' />
    </div>
  )
}
