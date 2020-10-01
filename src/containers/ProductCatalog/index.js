import React, { useEffect, useState } from 'react'

import {
  getProducts,
} from '../../api'

import {
  ProductCatalog,
} from '../../components'

export default () => {
  const [productList, setProductList] = useState([])
  const [cartItems, setCartItems] = useState({})
  const [loading, setLoading] = useState(true)
  // fetch data, ideally an action is dispatched and redux saga calls the api and set it in reducer
  // To save time, I am calling the api here.
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const { data, code } = await getProducts()
      if(code === 200) {
        setProductList(data)
      }
      else {
        // error handling
      }
      setLoading(false)
    }
    fetchData()
  }, [loading]) // Not accurate, but will work for now. // Todo: Check this

  const updateQuantity = (id, quantity) => {
    if(quantity < 0) return
    const tempCart = {...cartItems}
    if(!!tempCart[id]) { delete tempCart[id] }

    let currentItem = {}
    if(quantity > 0) {
      currentItem = { [id]: quantity }
    } 

    const updatedCart = { ...tempCart, ...currentItem }
    setCartItems(updatedCart) // Order will not be maintained :/
  }

  console.log('cartItems test...', cartItems)
  if(loading) return 'Products are being loaded...'

  return (
    <ProductCatalog
      productList={productList}
      updateQuantity={updateQuantity}
      cartItems={cartItems} // this looks like an overhead, rivist// Todo
    />
  )
}
