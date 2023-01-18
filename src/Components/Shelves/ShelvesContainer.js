import Shelves from "./Shelves";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const ShelvesContainer = ({ updateOption, allBooks, updateBooks }) => {

    const shelves = ['currently-Reading', 'want-To-Read', 'read']
    const pageShelves = shelves
        .map(e => `${e.charAt(0).toUpperCase()}${(e.slice(1).split('-').join(' '))}`);

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
    allBooks: PropTypes.Object
}
export default ShelvesContainer;