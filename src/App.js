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

    function handleCountMinus() {
        setCount(count - 1);
    }

    function handleCountPlus() {
        setCount(count + 1);
    }

    return (
        <div>
            <div className="step-div">
                <button> - </button>
                <span> Step: 0 </span>
                <button> + </button>
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
