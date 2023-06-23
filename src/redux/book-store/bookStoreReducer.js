import {
  ADDED,
  ADD_BOOK_DATA,
  CLEAR_BOOK_DATA,
  DELETED,
  LOADED,
  SET_BOOK_DATA_EDIT,
  UPDATED,
} from './actionTypes';

const initialState = {
  bookList: [],
  bookData: {
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  },
};

const bookStoreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const copiedState = { ...state };
  switch (type) {
    case LOADED:
      return { ...copiedState, bookList: [...payload] };

    case ADDED:
      return {
        ...copiedState,
        bookList: [...copiedState.bookList, { ...payload }],
      };

    case UPDATED:
      return {
        ...copiedState,
        bookList: copiedState.bookList.map((item) =>
          item.id === payload.id ? { ...payload } : item
        ),
      };

    case DELETED:
      return {
        ...copiedState,
        bookList: copiedState.bookList.filter((item) => item.id !== payload),
      };

    case ADD_BOOK_DATA:
      return {
        ...copiedState,
        bookData: {
          ...copiedState.bookData,
          [payload.fieldName]: payload.data,
        },
      };
    case SET_BOOK_DATA_EDIT:
      return {
        ...copiedState,
        bookData: {
          ...payload,
        },
      };

    case CLEAR_BOOK_DATA:
      return {
        ...copiedState,
        bookData: {
          name: '',
          author: '',
          thumbnail: '',
          price: '',
          rating: '',
          featured: false,
        },
      };

    default:
      return state;
  }
};

export default bookStoreReducer;
