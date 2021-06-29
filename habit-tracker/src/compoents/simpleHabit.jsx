import React, {useState, useRef, useCallback, useEffect} from 'react';

const SimpleHabit = () => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setcounst(count + 1);
    });

    useEffect(() => {
        console.log('mounted & updated! : ${count}');
    }, [count]);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name"></span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fa fa-plus-square"></i>
            </button>
        </li>
    );
}
export default SimpleHabit;