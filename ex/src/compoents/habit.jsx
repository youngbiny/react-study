import React, { Component, setState } from 'react';
              
class Habit extends Component {
    
    handleIncrement = (e) => {
        e.preventDefault();
        this.props.onIncrement();
    };

    handleDecrement = (e) => {
        e.preventDefault();
        this.props.onDecrement();
    };

    hadleDelete = (e) => {
        e.preventDefault();
        this.props.onDelete();
    };

    render() {
        return (
            <li>
                <span>{this.props.count}</span>
                <button className="btn" onClick={this.handleIncrement}>증가</button>
                <button className="btn" onClick={this.handleDecrement}>감소</button>
                <button className="btn" onClick={this.hadleDelete}>삭제</button>
            </li>
        );
    }
}

export default Habit;