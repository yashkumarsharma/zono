import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { validateEmail, validateName, validateMobile } from '../../utilities/validations'

import './style.css'

export default (props) => {
  const history = useHistory();
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState('')
  const { totalItems = 0, grandTotal = 0, onCheckoutSuccess, isCheckoutSuccess, resetCheckout } = props
  // Refactoring possible by moving this to a higher file
  const isCartInvalid = !totalItems || !grandTotal 

  const redirectToHomepage = () => history.push('/')

  const payNowClicked = () => {
    const isNameValid = validateName(name.trim())
    const isEmailValid = validateEmail(email.trim())
    const isMobileValid = validateMobile(mobile.trim())

    if(!isNameValid) setNameError('Invalid Name')
    if(!isEmailValid) setEmailError('Invalid Email')
    if(!isMobileValid) setMobileError('Please enter 10 digits of your mobile number')

    if(isNameValid && isEmailValid && isMobileValid) {
      onCheckoutSuccess({ name, email, mobile })
    }
  }

  const renderCheckoutSuccess = () => {
    setTimeout(resetCheckout, 3000)
    return (
      <div className='centerMessage'>
        Checkout successful. Redirecting to Homepage...
      </div>
    )
  }

  if(!isCheckoutSuccess && isCartInvalid) redirectToHomepage()

  if(isCheckoutSuccess) return renderCheckoutSuccess()

  if(!isCartInvalid) {
    return (
      <div className='checkoutComponentWrapper'>
        <div> Total No. of Items: {totalItems} </div>
        <div> Grand Total: {grandTotal} </div>
        <div className='formFields' title="error">
          <span className='label'> Name: </span>
          <span>
            <input
              onChange={e => {
                setName(e.target.value)
                setNameError('')
              }}
              value={name}
            />
            {!!nameError && <span className='errorMessage'>{nameError}</span>}
          </span>
        </div>
        <div className='formFields'>
          <span className='label'> Email: </span>
          <span>
            <input
              onChange={e => {
                setEmail(e.target.value)
                setEmailError('')
              }}
              value={email}
            />
            {!!emailError && <span className='errorMessage'>{emailError}</span>}
          </span>
        </div>
        <div className='formFields'>
          <span className='label'> Mobile: </span>
          <span>
            <input
              onChange={e => {
                setMobile(e.target.value.replace(/[^0-9]/g, ''))
                setMobileError('')
              }}
              value={mobile}
            />
            {!!mobileError && <span className='errorMessage'>{mobileError}</span>}
          </span>
        </div>

        <div className='payNowButton' onClick={payNowClicked}> Pay Now </div>
      </div>
    )
  }

  return <></>
}
