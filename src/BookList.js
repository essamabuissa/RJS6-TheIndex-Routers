import React, { Component } from 'react';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class BookList extends Component {
    state = {
        filterdBooks: this.props.books
    }

    filterBooks = query => {
        query = query.toLowerCase();
        let filterdBooks = this.props.books.filter(book => book.title.toLowerCase().includes(query))
        this.setState({ filterdBooks })

    }

    filterBooksByColor = bookColor => {
        return this.state.filterdBooks.filter(book => book.color === bookColor)
    }

    render() {
        const bookColor = this.props.match.params.bookColor;
        let books = this.state.filterdBooks;

        if (bookColor) {

            books = this.filterBooksByColor(bookColor)
        }

        return (
            <div>
                <h3>  Books  </h3>
                <SearchBar handleFilter={this.filterBooks} />
                <BookTable books={books} />


            </div>




        )


    }






}





export default BookList;