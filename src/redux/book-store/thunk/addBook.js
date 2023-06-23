import { added } from '../actions';

const addBook = (book) => async (dispatch) => {
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
  } catch (error) {
    console.log(error);
  }
};
export default addBook;
