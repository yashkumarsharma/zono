import { takeEvery, call, put } from 'redux-saga/effects'

import { setProductCatalog } from '../actions'
import { ActionTypes, productCatalogUrl } from '../constants'
import { getApi } from '../utilities/axios'

function* getProducts() {
  try {
    const data = yield call(getApi, productCatalogUrl)
    yield put(setProductCatalog(data))
  }
  catch (err) {
    console.log('error', err)
  }
}

export default function* watcherSaga() {
  yield takeEvery(ActionTypes.GET_PRODUCTS, getProducts)
}