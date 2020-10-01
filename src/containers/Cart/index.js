import React from 'react'
import { connect } from 'react-redux'

import { getCart } from '../../reducers/cart'

const Container = props => {

  console.log('props.....', props)
  return (
    <div> Empty Cart </div>
  )
}

// getCart
const mapStateToProps = (state, ownProps) => {
  return {
    cart : getCart(state).toJS(),
  }
}

export default connect(mapStateToProps, {})(Container)
