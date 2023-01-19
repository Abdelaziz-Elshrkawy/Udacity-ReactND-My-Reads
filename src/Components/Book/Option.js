const Option = ({ book, updateOption }) => {
    return (
        <div className="book-shelf-changer">
            <select
                defaultValue={book.shelf}
                onClick={(event) => {
                updateOption(event.target.value, book)
                }}
            >
                <option disabled>
                    Move to...
                </option>
                <option className="hide" value="currentlyReading">
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default Option;