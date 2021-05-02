import React, { Component } from "react";

class ResListItem extends Component {

    state = {
        mounted: false,
        bgColor:"",
        color: "",
        text: "Save"
    };

    componentMounted = () => {
        this.setState({
            mounted: true
        })
        console.log("Successfully mounted")
    };

    savingStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        } else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }
    };

    onClickSave = () => {
        this.props.saveThisBook(this.props)
        this.savingStyle();
    }

    render() {
        const {book} = this.props

        return (
            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src= {this.props.image} style={{maxwidth: "200px"}} alt="Book Cover"/>
                        <h4 className="card-title" style={{margin: "20px"}}>{this.props.title}</h4>
                        <p className="card-text">{this.props.description}</p>
                        <p style={{fontstyle: "italic"}}>Authors: {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Book Details</a>
                        <button onClick={this.onClickSave} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResListItem;