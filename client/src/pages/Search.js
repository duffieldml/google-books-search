import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input, SearchBtn } from "../components/Form";
import Nav from "../components/Nav";
import ResList from "../components/ResList";

class Search extends Component {
    state= {
        books: [],
        search: ""
    };

    //Function for book search
    bookSearch = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                this.setState({
                books: res.data.items,
                search:""})
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        this.bookSearch();
    };

    saveThisBook = book => {
        console.log("Current book: " + book);
        API.saveBook({
            id: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        })
        .then(res => console.log("Book successfully posted to DB: " + book))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <form>
                        <h4>Google Book Search</h4>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="e.g. The Stand"
                            />
                            <SearchBtn onClick={this.handleSearchSubmit}/>
                    </form>

                    {this.state.books.length ? (
                        <ResList
                        bookState={this.state.books}
                        saveThisBook={this.saveThisBook}>
                        </ResList>

                    ) 
                    : (
                        <div>
                            <hr/>
                            <p style={{fontStyle: "italic"}}>No books to display</p>
                        </div>
                    )}
                </Container>
            </div>
        )
    }

}

export default Search;