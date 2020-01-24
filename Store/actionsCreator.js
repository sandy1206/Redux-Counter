export function incrementCounter(value) {
  return {
    type: "INCREMENT",
    value
  };
}

export function decrementCounter(value) {
  return {
    type: "DECREMENT",
    value
  };
}

export function resetCounter() {
  return {
    type: "RESET"
  };
}
