import Option from "./Option";
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from "react-router-dom";

const Book = ({ book, updateOption, updateBooks }) => {
    const navigate = useNavigate()
    const urlParams = ()=> {
        navigate({
            pathname: '/book',
            state: {
                book
            }
        })
    }
    return (
        <div className="book">
            <div className="book-top">
                <Link to='/book' state={{ book }} onClick={urlParams}>
                <div
                        className="book-cover"
                        title={`Click to Show (${book.title}) Details`}
                    style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : false})`
                    }}
                ></div>
            </Link>
                <Option updateBooks={updateBooks} book={book} updateOption={updateOption} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors[0] : false}</div>
            </div>
    )
}
Book.propTypes = {
    book: PropTypes.object,
    updateOption: PropTypes.func,
    updateBooks: PropTypes.func
}
export default Book;