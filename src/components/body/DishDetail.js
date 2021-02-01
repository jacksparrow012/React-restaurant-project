import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
const DishDetail = (props) => {
    return (
        <div>
            <Card className="card">
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle className="heading"><h2>Name: {props.dish.name}</h2></CardTitle>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} className="image" />
                    <CardText className="label"><h3>Label:{props.dish.label}</h3></CardText>
                    <CardText className="price"> <h5>Price: {props.dish.price}</h5></CardText>
                    <CardText className="description">Description: {props.dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;