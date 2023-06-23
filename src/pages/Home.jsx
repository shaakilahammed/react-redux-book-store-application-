import { useState } from 'react';
import AddBookForm from '../components/AddBookForm';
import BookList from '../components/BookList';
import Nav from '../components/Nav';

const Home = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(isUpdate);
  return (
    <>
      <Nav />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList setIsUpdate={setIsUpdate} />
          <AddBookForm setIsUpdate={setIsUpdate} isUpdate={isUpdate} />
        </div>
      </main>
    </>
  );
};

export default Home;
