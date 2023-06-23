import { deleted } from '../actions';

const deleteBook = (bookId) => async (dispatch) => {
  try {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: 'DELETE',
    });

    dispatch(deleted(bookId));
  } catch (error) {
    console.log(error);
  }
};
export default deleteBook;
