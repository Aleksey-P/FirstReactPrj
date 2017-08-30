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
        const newSelectedArray = this.toggleSelectedElement(currentFoodArray, foodElementIndex);

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
        const currentSelectedFoodArray = this.state.selectedFood.slice();
        const selectedElementIndex = currentSelectedFoodArray.indexOf(currentFoodArray[foodElementIndex]);
        if (selectedElementIndex > -1) {
            currentSelectedFoodArray.splice(selectedElementIndex, 1);
        }

        this.setState({
            foodArray: currentFoodArray,
            selectedFood: currentSelectedFoodArray
        });
    }

    toggleSelectedElement(currentFoodArray, index) {
        const currentSelectedFoodArray = this.state.selectedFood.slice();
        const selectedElementIndex = currentSelectedFoodArray.indexOf(currentFoodArray[index]);
        if (selectedElementIndex === -1) {
            currentSelectedFoodArray.push(currentFoodArray[index]);
        } else {
            currentSelectedFoodArray.splice(selectedElementIndex, 1);
        }

        return currentSelectedFoodArray;
    }

    render() {
        return (
            <div>
                <div style={styles.flexContainer}>
                    <FoodList
                        foodArray={this.state.foodArray}
                        deleteFoodElementHandler={this.deleteFoodElementHandler}
                        selectFoodElementHandler={this.selectFoodElementHandler}
                    />
                    <AddFood createFoodElementHandler={this.createFoodElementHandler}/>
                </div>
                <RollFood selectedFood={this.state.selectedFood}/>
            </div>
        );
    }
}

const styles = {
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'stretch'
    }
};
