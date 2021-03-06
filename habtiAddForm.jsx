import React, { Component } from 'react';

class HabtiAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.inputRef.current.value);
        
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabtiAddForm;