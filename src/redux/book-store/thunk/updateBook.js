import { clearBookData, updated } from '../actions';

const updateBook = () => async (dispatch, getState) => {
  const book = getState().bookData;
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
    dispatch(clearBookData());
  } catch (error) {
    console.log(error);
  }
};
export default updateBook;
