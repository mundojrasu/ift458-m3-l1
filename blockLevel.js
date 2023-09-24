// TASK 1.2 BLOCK LEVEL SCOPE

{
  let blockLevelVariable = "Block Level";
  // This is a block level variable
  console.log(blockLevelVariable);
  // Prints "Block Level"
}

console.log(blockLevelVariable);
// ReferenceError: blockLevelVariable is not defined
