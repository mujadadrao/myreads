import React from 'react'
import './App.css'
import * as ShelfType from "./constants";
import AppTitle from "./AppTitle";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";
import {Link, Route} from "react-router-dom";
import SearchBar from "./SearchBar";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchedBooks: [],
        };
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then(
            (books) => {
                this.setState(
                    () => {
                        return ({books: books})
                    }
                )
            }
        );
    }

    searchBooks = (query) => {
        BooksAPI.search(query).then(
            (books) => {
                let searchedBooks = [];
                if (SearchBar.isValidArray(books)) {
                    for (let book of books) {
                        book.shelf = this.getBookShelf(book);
                    }
                    searchedBooks = books;
                }
                this.setState(
                    () => {
                        return ({searchedBooks: searchedBooks})
                    }
                )
            }
        )
    }

    componentDidMount() {
        this.fetchAllBooks();
    }

    getBookShelf = (book) => {
        const bookIndex = this.state.books.findIndex((b) => (b.id === book.id));
        if (bookIndex !== -1) {
            return this.state.books[bookIndex].shelf;
        } else {
            return ShelfType.NONE;
        }
    }

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        const bookIndex = this.state.books.findIndex((b) => (b.id === book.id));
        book.shelf = shelf;
        const books = [...this.state.books];

        if (bookIndex !== -1) {
            books[bookIndex] = book;
        } else {
            books.push(book)
        }
        this.setState(
            (prevState) => ({books: books})
        )
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <AppTitle title={'MyReads'}/>
                    <Route exact path='/' render={
                        () => {
                            return <div>{
                                ShelfType.types.map((shelfType) => (
                                    <Shelf key={shelfType} books={
                                        this.state.books.filter(
                                            (book) => (book.shelf === shelfType)
                                        )} shelfTitle={ShelfType.shelfTitles[shelfType]}
                                           updateBookShelf={this.updateBookShelf}
                                    />))
                            }
                                <div className="open-search">
                                    <Link to='/search'>
                                        <button>Search for Book</button>
                                    </Link>
                                </div>
                            </div>
                        }
                    }/>

                    <Route exact path='/search' render={() => (
                        <SearchBar searchBooks={this.searchBooks}
                                   searchedBooks={this.state.searchedBooks}
                                   updateBookShelf={this.updateBookShelf}/>
                    )}
                    />

                </div>
            </div>
        );
    }
}

export default BooksApp;
