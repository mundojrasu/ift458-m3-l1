// TASK 1.1 MODULE LEVEL SCOPE

let moduleLevelVariable = "Module Level";
// This is a module level variable

function displayVar() {
  console.log(moduleLevelVariable);
}

displayVar(); // Prints "Module Level"
