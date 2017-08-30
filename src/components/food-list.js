import React from 'react';
import {FoodItem} from './food';

export class FoodList extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        if (e.target.tagName === 'DIV' && e.target.textContent === 'X') {
            const foodName = e.target.parentNode.textContent.split(' ')[0];
            this.props.deleteFoodElementHandler(foodName);
        }else if (e.target.tagName === 'LI') {
            const foodName = e.target.textContent.split(' ');
            this.props.selectFoodElementHandler(foodName[0]);
        }
    }

    render() {
        const listElements = this.props.foodArray.map((foodElement, i) => {
            return <FoodItem
                key={`${foodElement.foodName}_${i}`}
                foodName={foodElement.foodName}
                isSelected={foodElement.isSelected}/>
        });
        return (<ul
            style={{listStyle: 'none'}}
            onClick={this.onClickHandler}>
            {listElements}
        </ul>);
    }
}
