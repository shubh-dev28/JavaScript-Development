// 3.1 — What is Data in JavaScript?

// Data is any information your program uses. we need data types Because different kinds of data behave differently - Numbers can be added, Strings can be joined, Booleans help control logic, Objects store multiple details together. JavaScript automatically assigns a type to every value. 

// Two Major Categories = Primitive Types (string, number, boolean, null, undefined, symbol, bigint), Actual value stored, Simple, fast, copied by value. Reference Types (objects, arrays, functions), Memory address stored, Complex, copied by reference. 

// Understand Types
let age = 24 // number
let name = 'Shibu' // string
let isLoddedIn = false // Boolean
let data = null // null means empty value
let undefined // undefined means variable is not defined yet
let tasks = ['eat', 'code', 'repeat'] // objects - array
let userDetails = {
    name : 'Shibu',
    age : 24,
    doesSmoke : false,
    isMarried : false,
    code : 18
} // object

// What is the difference between Primitive and Reference Type in your own words? 
// Primitive types values are stored in stack and is copied by value and is immutable, but non-primitive values are stored in heap and is copied by reference and so is mutable even if it declared with const
