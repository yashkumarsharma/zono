import React from 'react'

import './style.css'

export default (props) => {
  const { icon, id, name, price, quantity, updateCart } = props

  const renderQuantity = () => {
    const isMinusButtonDisabled = quantity === 0
    return (
      <div>
        <input disabled value={quantity} />
        <button onClick={() => updateCart({ id, quantity: quantity + 1})}> + </button>
        <button onClick={() => updateCart({ id, quantity: quantity - 1})} disabled={isMinusButtonDisabled}> - </button>
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
