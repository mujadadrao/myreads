import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class ListBooks extends React.Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books.map(
                            (book) => <Book key={book.id} book={book} updateBookShelf={this.props.updateBookShelf}/>
                        )
                    }
                </ol>
            </div>
        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}


export default ListBooks;