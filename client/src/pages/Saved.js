import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import SavedBooks from "../components/SavedBooks";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentMounted = () => {
        this.getBooks();
    }

    deleteThisBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("Deleted Book: ", res);
            this.getBooks();
        })
        .catch(err => {console.log(err)
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log(res)
        })
        .catch(err => {console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    {this.state.savedBooks.length ? (
                        <SavedBooks
                        bookState={this.state.savedBooks}
                        deleteThisBook={this.deleteThisBook}>
                        </SavedBooks>
                    ) : (
                        <h4>You have not saved any books!</h4>
                    )}
                </Container>
            </div>
        )
    }

}

export default Saved;

