import React, { Component, setState } from 'react';
              
class Habit extends Component {
    
    handleIncrement = (habit) => {
        //e.preventDefault();
        console(this.props.habit);

        // this.props.onIncrement(this.props.habit);
    };

    handleDecrement = (habit) => {
        //e.preventDefault();
        // this.props.onDecrement(this.props.habit);
    };

    hadleDelete = (habit) => {
        //e.preventDefault();
        // this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <li>
                <span>{name}</span>
                <span>{count}</span>
                <button className="btn" onClick={this.handleIncrement}>증가</button>
                <button className="btn" onClick={this.handleDecrement}>감소</button>
                <button className="btn" onClick={this.hadleDelete}>삭제</button>
            </li>
        );
    }
}

export default Habit;