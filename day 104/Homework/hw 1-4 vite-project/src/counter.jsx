import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '10px' }}>+</button>
      <button onClick={decrement} style={{ margin: '10px' }}>-</button>
      <button onClick={reset} style={{ margin: '10px' }}>Reset</button>
    </div>
  );
}

export default Counter;