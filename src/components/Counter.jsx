import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../services/actions/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
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
 * providing store in react
 * use store
 */
