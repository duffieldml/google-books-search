import React, { Component } from "react";
import ResListItem from "../ResListItem";

class ResList extends Component {

    render() {
        return (
            this.props.bookState.map((book) => (
                <ResListItem
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                link={book.volumeInfo.previewLink}
                authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(",") : book.volumeInfo.authors}
                image={book.volumeInfo.image}
                description={book.volumeInfo.description}
                saveThisBook={this.props.saveThisBook}
                />
            ))
        )
    }
}

export default ResList;