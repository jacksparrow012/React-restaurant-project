import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Send Your Feedback to Us</h2>
                        <Form className="myForm">
                            <Label></Label>
                            <FormGroup>
                                <Input type="text"
                                    name="firstname"
                                    placeholder="Your First Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text"
                                    name="lastname"
                                    placeholder="Your Last Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number"
                                    name="telnum"
                                    placeholder="Your Contact Number"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email"
                                    name="email"
                                    placeholder="Your Email"
                                />
                            </FormGroup>

                            <FormGroup>
                                <div className="row">
                                    <div className="col-6">
                                        <h4>How we will contact with you?</h4>
                                    </div>

                                    <div className="col-6">
                                        <Input type="select" name="contactType">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Can we contact with you?</h5>
                                    </div>
                                    <div className="col-6">
                                        <Input type="checkbox" name="agree" />
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" placeholder="write something about our service"></Input>
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