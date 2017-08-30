import React from 'react';

export class RollFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolledFood: null
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    rollFood() {
        if (!this.props.selectedFood.length) {
            return;
        }
        const foodCount = this.props.selectedFood.length;
        const foodElementIndex = Math.floor(Math.random() * (foodCount + 1));
        this.setState({
            rolledFood: this.props.selectedFood[foodElementIndex]
        });
    }

    onClickHandler() {
        this.rollFood();
    }

    render() {
        if (this.state.rolledFood) {
            return (
                <div>
                    <div>{`${this.state.rolledFood.foodName}`}</div>
                    <button onClick={this.onClickHandler}>ROLL!</button>
                </div>
            );
        }
        return (
            <div>
                <div>CLICK ROLL!</div>
                <button onClick={this.onClickHandler}>ROLL!</button>
            </div>
        );
    }
}
