const add = function () {
  return { type: "ADD" };
};

const subtract = function () {
  return { type: "SUBTRACT" };
};

const reset = function () {
  return { type: "RESET" };
};

export { add, subtract, reset };
