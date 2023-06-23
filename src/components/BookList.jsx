import { useEffect, useState } from 'react';
import fetchBooks from '../redux/book-store/thunk/fetchBooks';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';

const BookList = ({ setIsUpdate, searchInput }) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const [showFeatured, setShowFeatured] = useState(false);
  // console.log(bookList);

  const filterByFeatured = (book) => {
    return showFeatured ? book.featured : true;
  };
  const filterSearch = (book) => {
    return searchInput
      ? book.name.toLowerCase().includes(searchInput?.toLowerCase())
      : true;
  };
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${!showFeatured && 'active-filter'}`}
            id="lws-filterAll"
            onClick={() => setShowFeatured(false)}
          >
            All
          </button>
          <button
            className={`filter-btn ${showFeatured && 'active-filter'}`}
            id="lws-filterFeatured"
            onClick={() => setShowFeatured(true)}
          >
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* Card 1  */}
        {bookList.length <= 0
          ? 'No Book Found'
          : bookList
              .filter(filterSearch)
              .filter(filterByFeatured)
              .map((book) => (
                <Book book={book} key={book.id} setIsUpdate={setIsUpdate} />
              ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  setIsUpdate: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
};

export default BookList;
