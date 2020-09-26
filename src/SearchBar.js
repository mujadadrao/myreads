import React from "react";
import {Link} from "react-router-dom";
import SearchInput from "./SearchInput";
import ListBooks from "./ListBooks";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
    state = {
        query: '',
    }

    updateQuery = (query) => {
        this.setState(() => {
            return {
                query: query
            }
        })
        this.props.searchBooks(query);
    }


    static isValidArray = (array) => {
        return Array.isArray(array) && array.length
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Home</Link>
                    <SearchInput query={this.state.query} updateQuery={this.updateQuery}/>
                </div>
                <div className="search-books-results">
                    {SearchBar.isValidArray(this.props.searchedBooks) ?
                        (<ListBooks books={this.props.searchedBooks} updateBookShelf={this.props.updateBookShelf}/>)
                        : ''
                    }
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    searchBooks: PropTypes.func.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default SearchBar;