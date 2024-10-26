import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [number, setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation();
        setNumber(number + 1);
        console.log(number);
    }

    return (
        <div>
            <h1 className="display">{number}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Counter;
