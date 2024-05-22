const initialState = { count: 0 };

const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
