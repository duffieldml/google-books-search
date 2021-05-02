import React from "react";

function SavedBookItem(props) {

    const {title, authors, description, image, link, deleteThisBook} = props;
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src= {image} style={{maxwidth: "200px"}} alt="Book Cover"/>
                    <h4 className="card-title" style={{margin: "20px"}}>{title}</h4>
                    <p className="card-text">{description}</p>
                    <p style={{fontstyle: "italic"}}>Authors: {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">View Book Details</a>
                    <button onClick={deleteThisBook.bind(this, props)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default SavedBookItem;