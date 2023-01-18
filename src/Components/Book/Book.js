import Option from "./Option";
import image from '../../icons/cover error.webp'
const Book = ({ book, updateOption, updateBooks }) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 188,
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : image})`
                    }}
                ></div>
                <Option updateBooks={updateBooks} book={book} updateOption={updateOption} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors[0] : false}</div>
        </div>
    )
}
export default Book;