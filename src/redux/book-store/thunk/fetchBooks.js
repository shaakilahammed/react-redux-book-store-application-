import { loaded } from '../actions';

const fetchBooks = async (dispatch) => {
  try {
    const response = await fetch('http://localhost:9000/books');
    const books = await response.json();

    dispatch(loaded(books));
  } catch (error) {
    console.log(error);
  }
};
export default fetchBooks;
