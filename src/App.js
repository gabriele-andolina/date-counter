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

    return (
        <div>
            <div className="step-div">
                <button> - </button>
                <span> Step: 0 </span>
                <button> + </button>
            </div>

            <div className="count-div">
                <button> - </button>
                <span> Count: {count} </span>
                <button> + </button>
            </div>
        </div>
    );
}

export default App;
