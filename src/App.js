function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    return (
        <div>
            <div>
                <button>-</button>
                <span> Step: 0 </span>
                <button>+</button>
            </div>
            <div>
                <button>-</button>
                <span> Count: 0 </span>
                <button>+</button>
            </div>
        </div>
    );
}

export default App;
