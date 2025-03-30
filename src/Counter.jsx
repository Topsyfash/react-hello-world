import { useState } from "react";

const Counter = () => {
    const [count, setcount] = useState(0);
    const maxLimit = 50;

    const increase = () => {
        if (count < maxLimit) {
            setcount(count + 1);
        }
    };

    const decrease = () => {
        if (count > 0) {
            setcount(count - 1);
        };
    };

    return (
        <div>
            <div className="counter">{count}</div>
            <div className="buttons">
                <button className="addBtn" onClick={increase}>
                    Increase
                </button>
                <button className="subBtn" onClick={decrease} disabled={count === 0}>
                    Decrease
                </button>
            </div>
            <div className="message">
                {count >= maxLimit && (
                    <p>You have Reached the limit</p>
                )}
            </div>
        </div>
    )
}

export default Counter