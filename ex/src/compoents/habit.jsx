import React, { Component, setState } from 'react';


class Habit extends Component {
    state = {
        count : 0
    };
    handleIncrement = (event) => {
        event.preventDefault();
        this.setState({count : this.state.count + 1});
    };

    handleDecrement = (event) => {
        event.preventDefault();
        const count = this.state.count - 1;
        this.setState({count : count ? 0 : count});
    };

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