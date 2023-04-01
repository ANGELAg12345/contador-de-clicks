import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador de clics: {count}</h1>
      <button onClick={handleIncrement}>sumar</button>

      <button onClick={handleDecrement}>Borrar</button>
    </div>
  );
}

export default App;