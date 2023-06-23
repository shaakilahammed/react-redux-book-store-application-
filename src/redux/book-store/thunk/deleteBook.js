import { deleted } from '../actions';

const addBook = (bookId) => async (dispatch) => {
  try {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: 'DELETE',
    });

    dispatch(deleted(bookId));
  } catch (error) {
    console.log(error);
  }
};
export default addBook;
