import React from "react";
import PropTypes from "prop-types";


class SelectBookShelf extends React.Component {
    handleChange = (event) => {
        const newShelf = event.target.value;
        this.props.updateBookShelf(this.props.book, newShelf);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

SelectBookShelf.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default SelectBookShelf;