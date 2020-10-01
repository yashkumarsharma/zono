import React from 'react'

import './style.css'

export default (props) => {


  const renderQuantity = () => {
    const { id, quantity, updateQuantity } = props
    // Todo: Add check if quantity is already 0
    return (
      <div>
        <input value={quantity} />
        <button onClick={() => updateQuantity(id, quantity + 1)}> + </button>
        <button onClick={() => updateQuantity(id, quantity - 1)}> - </button>
      </div>
    )
  }

  // separate component for Quantity can be made...
  console.log('Props of Single Product', props)
  const { icon, name, price } = props
  return (
    <div className='productWrapper'>
      <div> <img alt={name} className='productIcon' src={icon} /> </div>
      <div> {name} </div>
      <div> {price} </div>
      <div> {renderQuantity()} </div>      
    </div>
  )
}