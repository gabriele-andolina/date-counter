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
    const [step, setStep] = useState(0);

    function handleStepMinus() {
        setStep(step - 1);
    }

    function handleStepPlus() {
        setStep(step + 1);
    }

    function handleCountMinus() {
        setCount((c) => c - 1);
    }

    function handleCountPlus() {
        setCount((c) => c + 1);
    }

    return (
        <div>
            <div className="step-div">
                <button onClick={handleStepMinus}> - </button>
                <span> Step: {step} </span>
                <button onClick={handleStepPlus}> + </button>
            </div>

            <div className="count-div">
                <button onClick={handleCountMinus}> - </button>
                <span> Count: {count} </span>
                <button onClick={handleCountPlus}> + </button>
            </div>
        </div>
    );
}

export default App;
