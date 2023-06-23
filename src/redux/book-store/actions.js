import { ADDED, DELETED, UPDATED, LOADED } from './actionTypes';

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
