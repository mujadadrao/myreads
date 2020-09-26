import React from "react";
import ListBooks from "./ListBooks";
import PropTypes from "prop-types";

class Shelf extends React.Component {
    render() {
        return (
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                            <ListBooks books={this.props.books} updateBookShelf={this.props.updateBookShelf}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    shelfTitle: PropTypes.string.isRequired,
}


export default Shelf;