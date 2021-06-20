import React, { Component } from 'react';

class Habit extends Component {

    handleIncrement = () => {
       this.props.onIncrement(this.props.habit);
    };
    hadleDecrease = () => {
        this.props.onDecrement(this.props.habit);
    };
    hadleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        console.log(this.props.habit);
        const habitName = this.props.habit.name;
        const {name, count} = this.props.habit;
        return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="far fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.hadleDecrease}>
                <i className="far fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.hadleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;