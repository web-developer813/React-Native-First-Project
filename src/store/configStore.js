import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware, { END } from 'redux-saga';

// import logger from 'redux-logger';

import rootReducer from '../reducers';
// import rootSaga from '../sagas';
// import STORAGE_CONFIG from '../constants/config';

// if (__DEV__) {
//   window.requestIdleCallback = null;
//   window.cancelIdleCallback = null;
// }

//export default function configStore(initialState) {
//  // const sagaMiddleware = createSagaMiddleware();
//
//  const store = createStore(
//    rootReducer,
//    initialState
//  );
//
//  return store;
//}
//export default configStore
//

const configStore = (initialState) => {
   return createStore(rootReducer, initialState, )
}

export default configStore;
