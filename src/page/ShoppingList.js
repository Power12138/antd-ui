import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>ShoppingList for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;