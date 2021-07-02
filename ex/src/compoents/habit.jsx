import React, { Component } from 'react';


class Habit extends Component {
    state = {
        count : 0
    };
    handleIncrement = (event) => {
        event.prevnetDefault();
        const count = this.state.count + 1;
    }

    handleDecrement = (event) => {
        event.prevnetDefault();
    }

    render() {
        return (
            <>
                <span>{this.state.count}</span>
                <button className="btn" onClick={this.handleIncrement}>증가</button>
                <button className="btn" onClick={this.handleDecrement}>감소</button>
            </>
        );
    }
}

export default Habit;