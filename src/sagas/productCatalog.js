import { takeEvery, call, put } from 'redux-saga/effects'

import { setProductCatalog } from '../actions'
import { ActionTypes, productCatalogUrl } from '../constants'
import { getApi } from '../utilities/axios'
// import { getPageDataUrl } from '../constants/api'
// import { errorHandler } from './ErrorHandler'
// import { api } from '../utils/api'
// import { takeEvery } from 'redux-saga'


function* getProducts({ payload }) {
  console.log('I was called in saga------------------')
  try {
    // yield put(setArticlePageDataLoader(true))
    const data = yield call(getApi, productCatalogUrl)
    // console.log('data from saga', data)
    yield put(setProductCatalog(data))
    // yield put(setArticlePageDataLoader(false))
  }
  catch (err) {
    console.log('error', err)
    // yield put(setArticlePageDataLoader(false))
    // yield errorHandler({ err })
  }
}

// export function* watchFetchSingleArticleData() {
//   console.log('I am called --------------- ')
//   yield* takeEvery(ActionTypes.GET_PRODUCTS, getProducts)
// }


export default function* watcherSaga() {
  yield takeEvery(ActionTypes.GET_PRODUCTS, getProducts)
}