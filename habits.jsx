import React, { Component } from 'react';
import Habit from './habit';
import HabtiAddForm from './habtiAddForm';

class Habits extends Component {

    handleIncrement = (habit) => {
       this.props.onIncrement(habit);
    };
    hadleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    hadleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    render() {
        return (
            <>
            <HabtiAddForm />
            <ul>
                {
                    this.props.habits.map(habit => (
                        <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.hadleDecrement}
                        onDelete={this.hadleDelete}
                        />
                    ))
                }
                
            </ul>
            </>
        );
    }
}

export default Habits;