import cart from './cart'
import checkout from './checkout'
import productCatalog from './productCatalog'

export default {
  ...cart,
  ...checkout,
  ...productCatalog,
}
