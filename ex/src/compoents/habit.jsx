import React, { Component, setState } from 'react';


class Habit extends Component {
    
    handleIncrement = () => {

    };

    handleDecrement = () => {

    };

    hadleDelete = () => {

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