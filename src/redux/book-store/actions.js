import {
  ADDED,
  DELETED,
  UPDATED,
  LOADED,
  ADD_BOOK_DATA,
  CLEAR_BOOK_DATA,
  SET_BOOK_DATA_EDIT,
} from './actionTypes';

export const loaded = (bookStoreList) => {
  return {
    type: LOADED,
    payload: bookStoreList,
  };
};

export const added = (bookStore) => {
  return {
    type: ADDED,
    payload: bookStore,
  };
};

export const updated = (bookStore) => {
  return {
    type: UPDATED,
    payload: bookStore,
  };
};

export const deleted = (bookStoreId) => {
  return {
    type: DELETED,
    payload: bookStoreId,
  };
};

export const setBookDataEdit = (bookStore) => {
  return {
    type: SET_BOOK_DATA_EDIT,
    payload: bookStore,
  };
};

export const addBookData = (fieldName, data) => {
  return {
    type: ADD_BOOK_DATA,
    payload: { fieldName, data },
  };
};

export const clearBookData = () => {
  return {
    type: CLEAR_BOOK_DATA,
  };
};
