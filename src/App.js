import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ShelvesContainer from './Components/Shelves/ShelvesContainer';
import SearchPage from './Components/SearchPage';
import { update, getAll } from "./BooksAPI";
import BookDetails from './Components/Book/BookDetails';
function App() {
  const [allBooks, setAllBooks] = useState([])
  const shelves = ['currently-Reading', 'want-To-Read', 'read']
  
  const getAllBooks = async () => {
    await getAll().then(data => {
      setAllBooks(data)
    })
  }

  const pageShelves = shelves
    .map(e => `${e.charAt(0).toUpperCase()}${(e.slice(1).split('-').join(' '))}`);

  const updateOption = async (value, book) => {
    await update(book, value)
    getAllBooks()
  }
/*   console.log(booksIdPerShelf) */
  return (
    <Routes>
      <Route exact path='/' element={<ShelvesContainer getAllBooks={getAllBooks} pageShelves={pageShelves} allBooks={allBooks} updateOption={updateOption} />} />
      <Route exact path='/search' element={<SearchPage getAllBooks={getAllBooks} shelves={shelves} allBooks={allBooks} updateOption={updateOption} />} />
      <Route exact path='/book' element={<BookDetails />} />
      <Route path='*' element={
        <div style={
          {
            margin: 'auto'
          }
        } >
          <h2>
            Error 404 Page Not Found
          </h2>
          <div className="error-btn">
            <Link to='/'>
              <button>
                Go Back
              </button>
            </Link>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
