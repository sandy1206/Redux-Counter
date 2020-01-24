const countReducer = (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.value
      };
    case "DECREMENT":
      return {
        count: state.count - action.value
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return {
        count: 0
      };
  }
};

export default countReducer;
