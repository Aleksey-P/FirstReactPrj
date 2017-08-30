import React from 'react';
import {FoodList} from './food-list';
import {AddFood} from './add-food';
import {RollFood} from './roll-food';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodArray: [],
            selectedFood: []
        };

        this.selectFoodElementHandler = this.selectFoodElementHandler.bind(this);
        this.createFoodElementHandler = this.createFoodElementHandler.bind(this);
        this.deleteFoodElementHandler = this.deleteFoodElementHandler.bind(this);
    }

    selectFoodElementHandler(foodName) {
        const currentFoodArray = this.state.foodArray.slice();
        const foodElementIndex = currentFoodArray.findIndex((curr) => curr.foodName === foodName);
        const newSelectedArray = this.toggleSelectedElement(currentFoodArray, foodElementIndex, false);

        currentFoodArray[foodElementIndex].isSelected = !currentFoodArray[foodElementIndex].isSelected;
        this.setState({
            selectedFood: newSelectedArray,
            foodArray: currentFoodArray
        });
    }

    createFoodElementHandler(newFoodElement) {
        const currentFoodArray = this.state.foodArray.slice();
        currentFoodArray.push(newFoodElement);
        this.setState({
            foodArray: currentFoodArray
        });
    }

    deleteFoodElementHandler(foodName) {
        let currentFoodArray = this.state.foodArray.slice();
        const foodElementIndex = currentFoodArray.findIndex((curr) => curr.foodName === foodName);
        currentFoodArray.splice(foodElementIndex, 1);
        const newSelectedArray = this.toggleSelectedElement(currentFoodArray, foodElementIndex, true);

        this.setState({
            foodArray: currentFoodArray,
            selectedFood: newSelectedArray
        });
    }

    toggleSelectedElement(currentFoodArray, index, isDeleting) {
        const currentSelectedFoodArray = this.state.selectedFood.slice();
        const selectedElementIndex = currentSelectedFoodArray.indexOf(currentFoodArray[index]);
        if (selectedElementIndex === -1 && !isDeleting) {
            currentSelectedFoodArray.push(currentFoodArray[index]);
        }else {
            currentSelectedFoodArray.splice(selectedElementIndex, 1);
        }

        return currentSelectedFoodArray;
    }

    render() {
        return (
            <div>
                <FoodList
                    foodArray={this.state.foodArray}
                    deleteFoodElementHandler={this.deleteFoodElementHandler}
                    selectFoodElementHandler={this.selectFoodElementHandler}
                />
                <RollFood selectedFood={this.state.selectedFood}/>
                <AddFood createFoodElementHandler={this.createFoodElementHandler}/>
            </div>
    );
    }
}
