import { Link, useLocation, Navigate } from "react-router-dom"
const BookDetails = () => {
    if (!useLocation()) {
        Navigate('/')
    }
    const book = useLocation().state.book
    window.history.pushState(null, null, '/');
    return (
        <div className="container-detailed">
            <div className="btn-container-detailed">
                <div className="home-btn">
                    <Link to='/' className="link-detailed" ><button className="btn-detailed">Home</button></Link>
                </div>
                <div className="search-btn">
                    <Link to='/search' className="link-detailed" ><button className="btn-detailed">Search</button></Link>
                </div>
            </div>
        <div className="book-detailed">
            <div className="book-top-detailed">
                    <div
                    className="book-cover-detailed"
                        style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : false})`
                        }}
                    ></div>
            </div>
                <div className="book-title-detailed">{book.title}</div>
                <div className="book-authors-detailed"><div className="author-div">Authors</div>{book.authors ? [...book.authors].join(', ') : 'No Authors'}</div>
                <div className="book-description-detailed"><div className="description-div">Description</div>{book.description ? book.description.slice(0,500)+'....' : false}</div>
            </div>
        </div>
    )
}

export default BookDetails;
