import React from 'react';

export class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: ''
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
    }

    handleUserNameInput(e) {
        this.setState({
            foodName: e.target.value
        });
    }

    onClickHandler() {
        const newFoodElement = {
            foodName: this.state.foodName,
            isSelected: false
        };
        this.props.createFoodElementHandler(newFoodElement);
        this.setState({
            foodName: ''
        });
    }

    render() {
        return (
            <div>
                <h4>Add food!</h4>
                <lable for="newFoodName">Food: </lable>
                <input
                    id="newFoodName"
                    type="text"
                    onChange={this.handleUserNameInput}
                    value={this.state.foodName}/>
                <button onClick={this.onClickHandler}>Add!</button>
            </div>
        );
    }
}
