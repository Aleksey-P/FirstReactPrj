import React from 'react';

export class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodPrice: 0
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handleUserPriceInput = this.handleUserPriceInput.bind(this);
    }

    handleUserNameInput(e) {
        this.setState({
            foodName: e.target.value
        });
    }

    handleUserPriceInput(e) {
        this.setState({
            foodPrice: e.target.value
        });
    }

    onClickHandler() {
        const newFoodElement = {
            foodName: this.state.foodName,
            foodPrice: this.state.foodPrice,
            isSelected: false
        };
        this.props.createFoodElementHandler(newFoodElement);
        this.setState({
            foodName: '',
            foodPrice: 0
        });
    }

    render() {
        return (
            <div>
                <h4>New food element!</h4>
                <lable for="newFoodName">Food</lable>
                <input
                    id="newFoodName"
                    type="text"
                    onChange={this.handleUserNameInput}
                    value={this.state.foodName}/>
                <lable for="newFoodPrice">Price</lable>
                <input
                    id="newFoodPrice"
                    type="number"
                    value={this.state.foodPrice}
                    onChange={this.handleUserPriceInput}
                />
                <button onClick={this.onClickHandler}>Add!</button>
            </div>
        );
    }
}
