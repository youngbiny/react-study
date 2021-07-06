import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits = [
            { id : 1, name : Reading, count:0 },
            { id : 2, name : Reading, count:0 },
            { id : 3, name : Reading, count:0 }
        ],
    }

    handleIncrement = (habit) => {
        console.log(habit);
    }

    handleDecrement = (habit) => {

    }

    handleDelete = (habit) => {

    }


    render() {
        return (
            <ul>
                {this.state.habits.map(habit => {
                    <Habit 
                        key = {habit.id}
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
