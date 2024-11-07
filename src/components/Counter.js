import React, { useCallback, useMemo, useRef, useState } from "react";
import "./Counter.css";
import { flushSync } from "react-dom";

const Counter = () => {
    const [number, setNumber] = useState(1);
    let num = useRef(0);
    function handleClick(e) {
        e.stopPropagation();
        flushSync(() => {
            setNumber((number) => number + 1);
            setNumber((number) => number + 1);
            setNumber((number) => number + 1);
        });
        num.current++;

        console.log(number);
        window.print();
    }

    const fibFx = useCallback(function fib(n) {
        if (n === 1 || n === 2 || n === 0) return 1;

        return fib(n - 1) + fib(n - 2);
    }, []);

    const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);

    return (
        <div>
            <h3 className="display">Value: {fibMemoized}</h3>
            <h1 className="display">
                {number} - {num.current}
            </h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Counter;
