// ⭐ 6.2 — Function Declaration

// most common and traditional way to create a function. A function name should tell what it does. readable and developer-friendly. 
//  function functionName() {
  // work (instructions)
// }

// Function Declarations are Hoisted. JavaScript lifts function declarations to the top of memory before execution. already learned.
greet()
function greet() {
    console.log('Hello Bro')
}

// Practice
// sayHello() — prints - already done in other way
// printGoal() — prints
function printGoal() {
    console.log("My goal is to become a high paying remote developer")
}
printGoal()
// calculateSum()
function calculateSum() {
    console.log(77+76)
}
calculateSum()

// Questions
// What is the difference between declaring and calling a function? = declaration means machine creation and calling means using that created machine
// Can a function declaration be called before it is written in code? Why? = Yes as it is hoisted and is fully loaded into the memory before execution
// Why should function names be meaningful? = to understand what is it all about and improve readability