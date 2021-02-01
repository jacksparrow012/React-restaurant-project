import React, { Component } from 'react';
import DISHES from "../../data/dishes.js"
import MenuItem from "./MenuItem"
import DishDetail from "./DishDetail"
class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }
    onDishSelect = dish => {
        console.log(dish);
        this.setState({ selectedDish: dish })
    }

    render() {
        const menu = this.state.dishes.map(item =>
            <MenuItem dish={item}
                key={item.id}
                DishSelect={this.onDishSelect} />
        )
        let disDetail = null;
        if (this.state.selectedDish != null) {
            disDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {disDetail}

                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;