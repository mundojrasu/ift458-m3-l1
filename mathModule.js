// TASK 2.1 Module Exports

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

module.exports = { add, subtract, multiply, divide };

// TASK 2.2 Node.js Modules Wrapper Function

// (function (exports, require, module, __filename, __dirname) {});

// TASK 2.3 Module Wrapper Cont'd
(function (exports, require, module, __filename, __dirname) {
  // The following code is the same as the previous task
  // however, the module, you file in a JavaScript file, is
  // wrapped by a self-invoking function with parameters
  // exports, require, module, __filename, __dirname

  let add = (x, y) => x + y;
  let subtract = (x, y) => x - y;

  module.exports = { add, subtract };
});
