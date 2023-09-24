// TASK 1.4 CLOSURE SCOPE

function outerFunction() {
  let closureVariable = "Closure Variable";
  // This variable is accessible to the
  // inner function due to closure
  return function innerFunction() {
    console.log(closureVariable);
    // Can access outer function's variable
  };
}

let newFunction = outerFunction();
newFunction(); // Prints "Closure Scope"
