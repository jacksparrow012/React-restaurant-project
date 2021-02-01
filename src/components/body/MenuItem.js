import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

const MenuItem = (props) => {
    //console.log(props);
    return (
        <div>
            <Card className="card">
                <CardBody>
                    <CardTitle className="heading" onClick={() => props.DishSelect(props.dish)}><h2>Name: {props.dish.name}</h2></CardTitle>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} className="image" onClick={() => props.DishSelect(props.dish)} />
                    {/* <CardText className="label"><h3>Label:{props.dish.label}</h3></CardText>
                    <CardText className="price"> <h5>Price: {props.dish.price}</h5></CardText> */}
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;