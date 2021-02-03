import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: true,
            message: "",
            contactType: "Tel."
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault()
    }
    render() {
        document.title = "Contact"
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Send Your Feedback to Us</h2>
                        <Form className="myForm" onSubmit={this.handleSubmit}>
                            <Label></Label>
                            <FormGroup>
                                <Input type="text"
                                    name="firstname"
                                    placeholder="Your First Name"
                                    value={this.state.firstname}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text"
                                    name="lastname"
                                    placeholder="Your Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number"
                                    name="telnum"
                                    placeholder="Your Contact Number"
                                    value={this.state.telnum}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Can we contact with you?</h5>
                                    </div>
                                    <div className="col-6">
                                        <Input type="checkbox" name="agree"
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="row">
                                    <div className="col-6">
                                        <h4>How we will contact with you?</h4>
                                    </div>

                                    <div className="col-6">
                                        <Input type="select" name="contactType"
                                            onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>

                                        </Input>
                                    </div>
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <Input type="textarea"
                                    placeholder="write something about our service"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                ></Input>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" className="btn btn-success btn-block btn-lg">Send Feedback</Button>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;