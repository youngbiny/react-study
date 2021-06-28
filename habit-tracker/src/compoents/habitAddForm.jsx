import React from 'react';

const HabitAddForm = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>   
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );       
};

export default HabitAddForm;