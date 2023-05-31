import './index.scss';
import {useState} from "react";

function App() {

    let [count, setCount] = useState(0)

    const addCount = () => {
        setCount(++count)
    }
    const removeCount = () => {
        setCount(--count)
    }

    return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={removeCount} className="minus">- Minus</button>
        <button onClick={addCount} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;
