import { useState } from "react";
import "./style.css";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // function handleStepMinus() {
    //     setStep((s) => s - 1);
    // }

    // function handleStepPlus() {
    //     setStep((s) => s + 1);
    // }

    function handleCountMinus() {
        setCount((c) => c - step);
    }

    function handleCountPlus() {
        setCount((c) => c + step);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);
    return (
        <div>
            <div className="step-div">
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                {/* <button onClick={handleStepMinus}> - </button> */}
                <span> Step: {step} </span>
                {/* <button onClick={handleStepPlus}> + </button> */}
            </div>

            <div className="count-div">
                <button onClick={handleCountMinus}> - </button>
                {/* <span> Count: {count} </span> */}
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={handleCountPlus}> + </button>
            </div>

            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
    );
}

export default App;
