import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Count: {count}</p>

      <button onClick={() => {
        setCount(count + 1);
      }}>Click Me!</button>
    </div>
  );
}

export default App;
