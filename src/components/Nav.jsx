import SearchBox from './SearchBox';
import PropTypes from 'prop-types';

const Nav = ({ setSearchInput }) => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src="./images/logo.svg" width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>

        <SearchBox setSearchInput={setSearchInput} />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
};

export default Nav;
