import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookList extends Component {

    state = {
        books: this.props.books
    };

    handleAvailable = (bookId) => {
        this.setState({
            books: this.state.books.map(book => book.id !== bookId ? book : ({...book, isAvailable: !book.isAvailable}))
        })
    };

    render() {
        const { books } = this.state;

        return books.length > 0 ? (
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Book book={book} handleAvailable={() => this.handleAvailable(book.id)}/>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No books</p>
        );
    }
}

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  )
};

export default BookList;
