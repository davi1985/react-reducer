'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleMinus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handlePus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex gap-3 text-5xl">
      <button onClick={handleMinus}>-</button>
      <p>{count}</p>
      <button onClick={handlePus}>+</button>
    </div>
  );
};
