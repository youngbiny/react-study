import React, { Component } from 'react';

class HabitAddform extends Component {
    inputRef = this.cereatRef();
    onSubmit = () =>{
        
    }

    render() {
        return (
            <form ref={this.inputRef} onSubmit={this.onSubmit}>
                <input type="text" className="" />
                <button className=""></button>
            </form>
        );
    }
}

export default HabitAddform;