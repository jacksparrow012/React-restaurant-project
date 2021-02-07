import React, { Component } from 'react';
import { Form, Input, Button } from "reactstrap"
class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            rating: "",
            comment: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault()
        this.setState({
            author: "",
            rating: "",
            comment: ""
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="author"
                    placeholder="Your Name"
                    value={this.state.author}
                    onChange={this.handleInputChange} />
                <br />
                <Input
                    type="select"
                    value={this.state.rating}
                    name="rating"
                    onChange={this.handleInputChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <br />
                <Input
                    type="textarea"
                    name="comment"
                    placeholder="Your comment about our service"
                    value={this.state.comment}
                    onChange={this.handleInputChange} />
                <br />
                <Button className="btn btn-lg btn-block btn-success">Submit Comment</Button>
            </Form>
        );
    }
}

export default CommentForm;