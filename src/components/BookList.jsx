import { useEffect } from 'react';
import fetchBooks from '../redux/book-store/thunk/fetchBooks';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state);
  // console.log(bookList);
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* Card 1  */}
        {bookList.length <= 0
          ? 'No Book Found'
          : bookList.map((book) => <Book book={book} key={book.id} />)}
      </div>
    </div>
  );
};

export default BookList;
