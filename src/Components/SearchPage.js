import { Link } from 'react-router-dom';
import Book from './Book/Book';
import { useEffect, useState } from 'react';
import * as API from '../BooksAPI'

const SearchPage = ({ updateOption, option, updateBooks, getAllBooks }) => {
    const [searchValue, setSearchValue] = useState('');
    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    };
    const [searchBooks, setSearchBooks] = useState([])
    useEffect(() => {
        if (searchValue.length > 0) {
            API.search(searchValue).then((data) => {
                if (!data.error) {
                    setSearchBooks(data)
                } else {
                    setSearchBooks([])
                }
            })
        }
    }, [searchValue]);
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link onClick={()=>{getAllBooks()}} to='/' className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        value={searchValue}
                        onChange={updateSearchValue}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchValue.length > 0 ?
                        searchBooks.length > 0 ?
                            searchBooks.map((book) => {
                                return (
                                    <Book getAllBooks={getAllBooks} updateBooks={updateBooks} option={option} updateOption={updateOption} key={book.id} book={book} />
                                )
                            }) : <p>No Book Matched Your Search Input</p> : <p>Search For Books</p>
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchPage;