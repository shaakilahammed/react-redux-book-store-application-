import { added, clearBookData } from '../actions';

const addBook = () => async (dispatch, getState) => {
  const book = getState().bookData;
  try {
    const response = await fetch('http://localhost:9000/books', {
      method: 'POST',
      body: JSON.stringify({ ...book }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newBook = await response.json();

    dispatch(added(newBook));
    dispatch(clearBookData());
  } catch (error) {
    console.log(error);
  }
};
export default addBook;
