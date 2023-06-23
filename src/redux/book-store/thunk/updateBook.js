import { updated } from '../actions';

const updateBook = (book) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/books/${book.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ ...book }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newBook = await response.json();

    dispatch(updated(newBook));
  } catch (error) {
    console.log(error);
  }
};
export default updateBook;
