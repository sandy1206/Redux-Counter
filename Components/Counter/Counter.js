import React from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../../Store/actionsCreator";

const Counter = props => {
  const { count, increment, decrement, reset } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement(5);
        }}
      >
        decerement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
  reset: resetCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
