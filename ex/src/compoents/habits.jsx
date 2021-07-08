import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits : [
            { id : 1, name : 'Reading', count:0 },
            { id : 2, name : 'Coding', count:0 },
            { id : 3, name : 'Running', count:0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habit];
        const index = indexOf(habit);
        this.setState({habits : habits});
    };

    handleDecrement = (habit) => {

    };

    handleDelete = (habit) => {

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
