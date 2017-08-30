import React from 'react';

export const FoodItem = (props) => {
    if (props.isSelected) {
        return <li style={{...styles.selected, ...styles.general}}>{`${props.foodName} `}
        <div style={styles.deleteBtn}>X</div></li>;
    }else {
        return <li style={styles.general}>{`${props.foodName} `}<div style={styles.deleteBtn}>X</div></li>;
    }

};

const styles = {
    general: {
        height: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
        padding: '0 5px'
    },
    selected: {
        backgroundColor: 'gray'
    },
    deleteBtn: {
        cursor: 'pointer',
        color: 'red'
    }
};
