import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
        <>
            <span className="habit-name">Reading</span>
            <span className="habit-count">8</span>
            <span className="habit-coding">coding</span>
        </>
        );
    }
}

export default Habit;