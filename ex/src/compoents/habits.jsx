import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onInDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };


    render() {
        return (
            <ul>
                {this.state.habits.map(habit => {
                    <Habit 
                        key = {habit.id}
                        habit = {habit}
                        onIncrement = {this.handleIncrement}
                        onDecrement = {this.handleDecrement}
                        onDelete = {this.handleDelete}
                    />
                })}
            </ul>
        );
    }
}

export default Habits;
