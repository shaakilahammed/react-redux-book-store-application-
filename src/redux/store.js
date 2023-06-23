import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import bookStoreReducer from './book-store/bookStoreReducer';

const store = createStore(
  bookStoreReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
