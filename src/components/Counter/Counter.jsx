import React from 'react';
import './Counter.css';

const Counter = () => {
  return (
    <div className="Counter">
      <span className="Counter__value">0</span>

      <div className="Counter__controls">
        <button type="button">+ 1</button>
        <button type="button">- 1</button>
      </div>
    </div>
  );
};
export default Counter;
