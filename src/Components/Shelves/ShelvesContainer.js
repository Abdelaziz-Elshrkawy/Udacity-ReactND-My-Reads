import Shelves from "./Shelves";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
const ShelvesContainer = ({ updateOption, allBooks, updateBooks, pageShelves, getAllBooks }) => {
    window.history.pushState(null, null, '/');
    useEffect(
        () => {
            getAllBooks()
        }
    ,[])
    return (
        <div className="shelves-container">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                pageShelves.map((e) => {
                    return <Shelves updateBooks={updateBooks} updateOption={updateOption} allBooks={allBooks} key={e} name={e} />
                })
            }
            <div className="open-search">
                <Link to='/search'></Link>
            </div>
        </div>

    )
}
ShelvesContainer.prototype = {
    updateOption: PropTypes.func,
    allBooks: PropTypes.array
}
export default ShelvesContainer;