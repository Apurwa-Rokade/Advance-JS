const Calculator = {
  result: 0,

  add(value) {
    this.result += value;
    return this;
  },

  subtract(value) {
    this.result -= value;
    return this;
  },

  multiply(value) {
    this.result *= value;
    return this;
  },

  divide(value) {
    if (value !== 0) {
      this.result /= value;
    } else {
      console.error("Cannot divide by zero.");
    }
    return this;
  },

  getResult() {
    return this.result;
  },

  reset() {
    this.result = 0;
    return this;
  },
};

// Demonstrate method chaining
const result = Calculator.add(5).multiply(3).subtract(2).divide(4).getResult();
console.log("Result:", result);

// Reset the calculator
Calculator.reset();

// Another example of method chaining
const newResult = Calculator.add(10).subtract(2).multiply(3).getResult();
console.log("New Result:", newResult);
