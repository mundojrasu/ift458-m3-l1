// TASK 1.3 LOCAL LEVEL SCOPE

function displayVar() {
  let localLevelVariable = "Local Level";
  // This is a local level variable
  console.log(localLevelVariable);
  // Prints "Local Level"
}

displayVar(); // Prints "Local Level"
console.log(localLevelVariable);
// ReferenceError: localLevelVariable is not defined
