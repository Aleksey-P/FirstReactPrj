import React from 'react';

export const FoodItem = (props) => {
    if (props.isSelected) {
        return <li style={styles.selected}>{`${props.foodName} $${props.foodPrice}`}</li>;
    }else {
        return <li>{`${props.foodName} $${props.foodPrice}`}</li>;
    }

};

const styles = {
    selected: {
        backgroundColor: 'gray'
    }
};
