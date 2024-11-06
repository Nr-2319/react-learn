import React, { useRef, useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [number, setNumber] = useState(0);
    let num = useRef(0);
    function handleClick(e) {
        e.stopPropagation();
        setNumber((number) => number + 1);
        setNumber((number) => number + 1);
        setNumber((number) => number + 1);
        num.current++;

        console.log(num.current);
    }

    return (
        <div>
            <h1 className="display">
                {number} {num.current}
            </h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Counter;
