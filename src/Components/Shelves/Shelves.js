import Book from './../Book/Book';
import { PropTypes } from "prop-types";

const Shelves = ({ name, allBooks, updateOption, updateBooks }) => {
    const shelfBooks = allBooks.filter(e => e.shelf === `${name.charAt(0).toLowerCase()}${name.slice(1).split(' ').join('')}`);

    return (
        <div className="bookshelf" key={name}>
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelfBooks.map(book => {
                            return (
                                <Book updateBooks={updateBooks} updateOption={updateOption} key={book.id} book={book}  />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

Shelves.prototype = {
    name: PropTypes.string.isRequired
}

Shelves.propTypes = {
    name: PropTypes.string,
    allBooks: PropTypes.array,
    updateOption: PropTypes.func,
    updateBooks: PropTypes.func
}

export default Shelves;