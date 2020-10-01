import { fork } from 'redux-saga/effects'

import productCatalog from './productCatalog'

/**
 * rootSaga
 */
export default function* root() {
  yield fork(productCatalog)
}
