import { Link } from 'react-router-dom';
import Book from './Book/Book';
import { useEffect, useState } from 'react';
import * as API from '../BooksAPI'

const SearchPage = ({ updateOption, option, updateBooks, getAllBooks, allBooks, shelves }) => {
    const [searchValue, setSearchValue] = useState('');
    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    };
    const shelvesValue = shelves.map(e => {
        return `${e.charAt(0).toLowerCase()}${e.slice(1).split('-').join('')}`
    })
    console.log(shelvesValue)
    // array of book in the home page each within it's shelf in array
    //the first value from every array set to the value of shelf to use it in the iteration
    let fullBooksArr = [
        [shelvesValue[0], ...(allBooks.filter(e => e.shelf === shelvesValue[0]))],
        [shelvesValue[1], ...(allBooks.filter(e => e.shelf === shelvesValue[1]))],
        [shelvesValue[2], ...(allBooks.filter(e => e.shelf === shelvesValue[2]))]
    ]
    
    const [searchBooks, setSearchBooks] = useState([])
    useEffect(() => {
        getAllBooks()
        if (searchValue.length > 0) {
            API.search(searchValue).then((data) => {
                if (!data.error) {
                        //assigning the retrieved search data to variable to modify it
                        let finalData = data

                        for (let i = 0; i < fullBooksArr.length; i++){
                            for (let j = 1; j < fullBooksArr[i].length; j++){
                                for (let y = 0; y < data.length; y++){
                                    if (fullBooksArr[i][j].id === finalData[y].id) {
                                        finalData[y].shelf = fullBooksArr[i][0]
                                    }
                                }
                            }
                        }
                    setSearchBooks(finalData)
                    console.log(finalData)
                    } else {
                        setSearchBooks([])
                    }
                })
        }
    }, [searchValue]
    );

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link onClick={() => { getAllBooks() }} to='/' className="close-search">
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