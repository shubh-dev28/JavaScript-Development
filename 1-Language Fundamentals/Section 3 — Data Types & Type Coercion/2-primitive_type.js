// 📌 3.2 — Primitive Data Types (7 Types)

// Stored directly as a value. Copied by value → Changes don’t affect original variable

// String - "text inside quotes". any form of text.
let name = 'Shibu'
let goal = `High Paying developer` // template literals
let num = '44' // num as string
console.log(typeof name, typeof goal, typeof num)

// Number — integers & decimals. not differentiate int vs float
let age = 24
let rating = 9.5
let notValue = NaN // Not a Number is still number type. 
let result = Infinity // special number
console.log(result)
console.log(typeof age, typeof rating, typeof notValue, typeof result)

// Boolean — true or false. for decision making
let isSad = true
console.log(typeof isSad)

// Undefined — not assigned yet. when no value exists. 2 ways. both value and type is undefined
let x;
let y = undefined
console.log(x,y, typeof x, typeof y)

// Null — purposely empty. Represents intentional “no value”. we purposely reset or clear something.
let itemInCart = null
console.log(typeof itemInCart) // type of null is object. strange. legacy bug

// Symbol — unique & private identifiers. Used mostly in advanced concepts (React, backend libraries). Not understand fully
let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(typeof id1)
console.log(id1 === id2); // false (always unique)

// BigInt — huge numbers beyond normal limit. Used in finance, cryptography, scientific data.
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber) // bigInt, not number

// Exercise
// Create variables using all 7 primitive types - done already
// Add a comment explaining each - done
// Use typeof to check each type - done
// Print each variable + typeof in console - done