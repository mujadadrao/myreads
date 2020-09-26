import React from "react";
import BookCover from "./BookCover";
import BookDetails from "./BookDetails";
import SelectBookShelf from "./SelectBookShelf";
import PropTypes from "prop-types";


class Book extends React.Component {
    state = {
        shelf: '',
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover imageURL={this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}/>
                    <SelectBookShelf book={this.props.book} updateBookShelf={this.props.updateBookShelf}/>
                </div>
                <BookDetails title={this.props.book.title} authors={this.props.book.authors}/>
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default Book;