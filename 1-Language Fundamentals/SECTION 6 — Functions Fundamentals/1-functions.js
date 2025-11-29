// ⭐ 6.1 — Understanding Functions

// function as a small machine or tool that does some work for you. Takes inputs, Performs work, Gives output. 

// Why = To avoid repeating the same code again and again. rewriting the same logic multiple times. To organize your code into small chunks. To reuse logic. ex - Login logic, API calls, Validation, Calculations, Payment processing. we just reuse all 

// Structure = two main steps - Declaring (Creating) the Function, and Calling (Using) the Function. function is keyword with functionName and inside {} is function body. 
// creating the function
function sayHello() {
    console.log(`Hello`)
}
// calling the function - will execute the instruction.
sayHello()

// More example
function add() {
    console.log(12+13+12+57)
}
add()

// execution flow = first JS load the function in the memory and execution happens when u run the code. 

// Exercise
// A function that prints your full intro
function fullIntro() {
    console.log("My name is Shibu and my goal is to become a high paying remote developer")
}
fullIntro()
// A function that prints the current year - easy
// A function that prints your top skill
function mySkills() {
    console.log("Right now I am learning JavaScript fundamentals")
}
mySkills()
