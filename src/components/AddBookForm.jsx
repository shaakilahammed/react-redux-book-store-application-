// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import addBook from '../redux/book-store/thunk/addBook';
import { addBookData } from '../redux/book-store/actions';
import updateBook from '../redux/book-store/thunk/updateBook';

const AddBookForm = ({ isUpdate, setIsUpdate }) => {
  console.log(isUpdate);
  const dispatch = useDispatch();
  const input = useSelector((state) => state.bookData);
  // console.log(bookkk);
  // const [input, setInput] = useState({
  //   name: '',
  //   author: '',
  //   thumbnail: '',
  //   price: '',
  //   rating: '',
  //   featured: false,
  // });
  // dispatch(addBookData('name', input.name));

  const inputHandler = (e, fieldName) => {
    if (fieldName === 'rating' || fieldName === 'price') {
      dispatch(addBookData(fieldName, Number(e.target.value)));

      // setInput({ ...input, [fieldName]: Number(e.target.value) });
    } else if (fieldName === 'featured') {
      dispatch(addBookData(fieldName, e.target.checked));

      // setInput({ ...input, [fieldName]: e.target.checked });
    } else {
      dispatch(addBookData(fieldName, e.target.value));

      // setInput({ ...input, [fieldName]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateBook());
      setIsUpdate(false);
    } else {
      dispatch(addBook());
    }

    // setInput({
    //   name: '',
    //   author: '',
    //   thumbnail: '',
    //   price: '',
    //   rating: '',
    //   featured: false,
    // });
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={submitHandler}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={input?.name}
              onChange={(e) => inputHandler(e, 'name')}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={input?.author}
              onChange={(e) => inputHandler(e, 'author')}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={input?.thumbnail}
              onChange={(e) => inputHandler(e, 'thumbnail')}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={input?.price}
                onChange={(e) => inputHandler(e, 'price')}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={input?.rating}
                onChange={(e) => inputHandler(e, 'rating')}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={input?.featured}
              onChange={(e) => inputHandler(e, 'featured')}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {' '}
              This is a featured book{' '}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {isUpdate ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
};

AddBookForm.propTypes = {
  isUpdate: PropTypes.bool.isRequired,
  setIsUpdate: PropTypes.func.isRequired,
};

export default AddBookForm;
