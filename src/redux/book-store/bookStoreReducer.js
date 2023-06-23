import { ADDED, DELETED, LOADED, UPDATED } from './actionTypes';

const initialState = [];

const bookStoreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const copiedState = [...state];
  switch (type) {
    case LOADED:
      return [...payload];
    case ADDED:
      return [...copiedState, { ...payload }];
    case UPDATED:
      return copiedState.map((item) =>
        item.id === payload.id ? { ...item } : item
      );
    case DELETED:
      return copiedState.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

export default bookStoreReducer;
