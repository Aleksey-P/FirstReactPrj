import React from 'react';
import {FoodItem} from './food';

export class FoodList extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onDoubleClickHandler = this.onDoubleClickHandler.bind(this);
    }

    onClickHandler(e) {
        if (e.target.tagName !== 'LI') {
            return;
        }
        const foodName = e.target.textContent.split(' ');
        this.props.selectFoodElementHandler(foodName[0]);
    }

    onDoubleClickHandler(e) {
        if (e.target.tagName !== 'LI') {
            return;
        }
        const foodName = e.target.textContent.split('$')[0];
        this.props.deleteFoodElementHandler(foodName);
    }

    render() {
        const listElements = this.props.foodArray.map((foodElement, i) => {
            return <FoodItem
                key={`${foodElement.foodName}_${foodElement.foodPrice}_${i}`}
                foodName={foodElement.foodName}
                foodPrice={foodElement.foodPrice}
                isSelected={foodElement.isSelected}/>
        });
        return (<ul
            style={{listStyle: 'none'}}
            onDoubleClick={this.onDoubleClickHandler}
            onClick={this.onClickHandler}>
            {listElements}
            </ul>);
    }
}
