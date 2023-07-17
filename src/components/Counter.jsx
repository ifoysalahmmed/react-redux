import React, { useState } from "react";

const Counter = () => {
  const handleIncrement = () => {
    //
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : 0</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;

/* what we want to do */

// Counter -> Counter2 -> Counter3 -> Counter4

/* steps will be */
/**
 * state -> count : 0
 * actions -> increment, decrement, reset
 * reducers -> increment: count => count + 1
 * reducers -> decrement: count => count - 1
 * reducers -> reset: count => 0
 * store
 */
