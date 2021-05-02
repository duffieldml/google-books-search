import React, { Component } from "react";
import SavedBookItem from "../SavedBookItem";

class SavedBooks extends Component {

    render() {
        return (
            this.props.bookState.map((book) => (
                <SavedBookItem
                key={book.id}
                id={book.id}
                title={book.title}
                link={book.link}
                authors={book.authors && book.authors.length > 1 ? book.authors.join(",") : book.authors}
                image={book.image}
                description={book.description}
                deleteThisBook={this.props.deleteThisBook}
                />
            ))
        )
    }
}

export default SavedBooks;